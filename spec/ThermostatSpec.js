'use strict';
describe('Thermostat', function() {
  var thermostat;
  var startTemp;

  beforeEach(function(){
    thermostat = new Thermostat();
    startTemp = thermostat.getTemperature();

  });

  it('has a default temperature of 20 degrees', function() {
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it('can increase the temperature using the up button', function() {
    thermostat.upButton(1);
    expect(thermostat.getTemperature()).toEqual(startTemp+1);
  });

  it('can decrease the temperature using the down button', function() {
    thermostat.downButton(1);
    expect(thermostat.getTemperature()).toEqual(startTemp -1);
  });

  it('does not allow a temperatur less than 10 degrees', function() {
    expect(function() { thermostat.downButton(thermostat.MIN_TEMP + 1); }).toThrowError('can not go lower than 10 degrees');
  });

  it('has power saving mode on by default', function() {
    expect(thermostat.isPowerSaving()).toEqual(true);
  });

  it('can set power saving mode off/on', function() {
    thermostat.setPowerMode('off');
    expect(thermostat.isPowerSaving()).toEqual(false);
  });

  it('does not allow a temperature above 25 degrees if power saving mode is on', function() {
    expect(function() { thermostat.upButton(6); }).toThrowError('current max limit: 25 degrees');
  });

  it('does not allow a temperature above 32 degrees', function() {
    thermostat.setPowerMode('off');
    expect(function() { thermostat.upButton(13); }).toThrowError('maximum limit is 32 degrees');
  });

  it('automatically reduces temp to 25 if current temperature > 25 when switching on power mode', function(){
    thermostat.setPowerMode('off');
    thermostat.upButton(6);
    thermostat.setPowerMode('on')
    expect(thermostat.getTemperature()).toEqual(25);
  });

  it('can be reset to default temperatur of 20 degrees', function() {
    thermostat.reset();
    expect(thermostat.getTemperature()).toEqual(startTemp)
  });

  it('displays color based on energy usage', function() {
    expect(thermostat.displayColor()).toEqual('medium-usage');
    thermostat.downButton(5)
    expect(thermostat.displayColor()).toEqual('low-usage');
    thermostat.upButton(10)
    expect(thermostat.displayColor()).toEqual('high-usage');

  });

});
