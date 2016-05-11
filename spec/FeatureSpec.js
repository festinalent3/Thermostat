'use strict';

describe('Feature Test:', function(){
  var plane;
  var airport;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane(airport);
  });

  it('blocks takeoff when weather is stormy', function(){
    plane.land(airport)
    spyOn(airport,'isStormy').and.returnValue(true);
    expect(function(){ plane.takeOff();}).toThrowError('cannot takeoff during storm');
    expect(airport.landedPlanes()).toContain(plane);
  });

});
