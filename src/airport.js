'use strict';

function Airport() {
  this._hangar = [];
  this.MAX_CAPACITY = 20;
};

Airport.prototype.dock = function(plane) {
  if(this.isFull()) {
    throw new Error("nope, full!");
  }
  this._hangar.push(plane);
};

Airport.prototype.isFull = function() {
  if (this._hangar.length === this.MAX_CAPACITY) {
    return true;
  }
  return false;
};

Airport.prototype.landedPlanes = function() {
  return this._hangar;
};

Airport.prototype.isStormy = function() {
  var rand = Math.floor((Math.random() * 10) + 1);
  return rand > 8 ? false : true;
};
