function Thermostat() {
  this.temperature = 20;
  this._powerSaving = true;
}

Thermostat.prototype.upButton = function(times) {
  for (var i = 1; i <= times; i++) {
    if(this.isPowerSaving() && this.temperature === 25 ) {
      throw new Error('turn off power saving mode to raise temp further');
    }
    else if (this.temperature === 32 ) {
      throw new Error('maximum limit is 32 degrees');
    }
    this.temperature += 1;
  }
};

Thermostat.prototype.downButton = function(times) {
  for (var i = 1; i <= times; i++) {
    if(this.temperature === 10) {
      throw new Error('can not go lower than 10 degrees');
    }
    this.temperature -= 1;
  }
};

Thermostat.prototype.isPowerSaving = function() {
  return this._powerSaving;
};

Thermostat.prototype.setPowerMode = function(mode) {
  this._powerSaving = (mode === 'on') ? true : false;
};

Thermostat.prototype.reset = function () {
  this.temperature = 20;
}

Thermostat.prototype.displayColor = function () {
  if(this.temperature < 18 ) {
    return 'green';
  }
  else if(this.temperature < 25) {
    return 'yellow';
  }
  else {
    return 'red';
  }
}
