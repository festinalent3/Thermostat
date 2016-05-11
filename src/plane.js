'use strict';

function Plane(airport) {
  this.land(airport);
};

Plane.prototype.land = function(airport) {
  this.isLanded = true;
  this.airport = airport;
  airport.dock(this);
};

Plane.prototype.takeOff = function() {
  if (this.airport && this.airport.isStormy()) {
    throw new Error('cannot takeoff during storm');
  }
  else {
    this.isLanded = false;
    this.airport = 'none';
  }
};
