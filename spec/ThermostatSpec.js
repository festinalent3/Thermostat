describe('Thermostat', function() {
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
    startTemp = thermostat.temperature;

  });

  it('has a default temperature of 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('can increase the temperature using the up button', function() {
    thermostat.upButton(1);
    expect(thermostat.temperature).toEqual(startTemp+1);
  });

  it('can decrease the temperature using the down button', function() {
    thermostat.downButton(1);
    expect(thermostat.temperature).toEqual(startTemp -1);
  });

  it('does not allow a temperatur less than 10 degrees', function() {
    expect(function() { thermostat.downButton(11); }).toThrowError('can not go lower than 10 degrees');
  });

  it('has power saving mode on by default', function() {
    expect(thermostat.isPowerSaving()).toEqual(true);
  });

  it('can set power saving mode off/on', function() {
    thermostat.setPowerMode('off');
    expect(thermostat.isPowerSaving()).toEqual(false);
  });

  it('does not allow a temperature above 25 degrees if power saving mode is on', function() {
    expect(function() { thermostat.upButton(6); }).toThrowError('turn off power saving mode to raise temp further');
  });

  it('does not allow a temperature above 32 degrees', function() {
    thermostat.setPowerMode('off');
    expect(function() { thermostat.upButton(13); }).toThrowError('maximum limit is 32 degrees');
  });

  it('can be reset to default temperatur of 20 degrees', function() {
    thermostat.reset();
    expect(thermostat.temperature).toEqual(startTemp)
  });

  it('displays color based on energy usage', function() {
    expect(thermostat.displayColor()).toEqual('yellow');
    thermostat.downButton(5)
    expect(thermostat.displayColor()).toEqual('green');
    thermostat.upButton(10)
    expect(thermostat.displayColor()).toEqual('red');

  });

});
