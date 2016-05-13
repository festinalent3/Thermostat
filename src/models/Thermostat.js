'use strict';

function Thermostat(temperature) {
  this.DEFAULT_TEMP = temperature || 20;
  this.MIN_TEMP = 10;
  this.MAX_TEMP = 32;
  this.MAX_TEMP_WITH_PSM = 25;
  this.MEDIUM_USAGE_LIMIT = 18;
  this._temperature = this.DEFAULT_TEMP;
  this._powerSaving = true;
}

Thermostat.prototype.getTemperature = function() {
  return this._temperature;
}

Thermostat.prototype.upButton = function(times = 1) {
  for (var i = 1; i <= times; i++) {
    if(this.isMaxTemp()) {
      throw new Error(this.isPowerSaving() ?
      'current max limit: 25 degrees' : 'maximum limit is 32 degrees');
    }
    this._temperature += 1;
  }
  apiSaveTemperature(this._temperature);
};

Thermostat.prototype.downButton = function(times = 1) {
  for (var i = 1; i <= times; i++) {
    if(this.isMinTemp()) {
      throw new Error('can not go lower than 10 degrees');
    }
    this._temperature -= 1;
  }
  apiSaveTemperature(this._temperature);
};

Thermostat.prototype.isMaxTemp = function () {
  if(this.isPowerSaving()) {
    return this.getTemperature() === this.MAX_TEMP_WITH_PSM;
  }
  return this.getTemperature() === this.MAX_TEMP;
}


Thermostat.prototype.isMinTemp = function() {
  return this.getTemperature() === this.MIN_TEMP;
}

Thermostat.prototype.isPowerSaving = function() {
  return this._powerSaving;
};

Thermostat.prototype.setPowerMode = function(mode) {
  this._powerSaving = (mode === 'on') ? true : false;
  if(this._powerSaving && this._temperature > 25) {
    this._temperature = 25;
  }
  apiSavePSM(mode);
};

Thermostat.prototype.reset = function () {
  this._temperature = 20;
}

Thermostat.prototype.displayColor = function () {
  if(this._temperature < this.MEDIUM_USAGE_LIMIT ) {
    return 'low-usage';
  }
  else if(this._temperature < this.MAX_TEMP_WITH_PSM) {
    return 'medium-usage';
  }
  else {
    return 'high-usage';
  }
}
