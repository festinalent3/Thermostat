$(document).ready(function() {

  var thermostat = new Thermostat();

  $("#headline").text('Thermostat');
  $('#temperature').text(thermostat.getTemperature());

  $("#temperature-up").click(function(){
    thermostat.upButton();
    $('#temperature').text(thermostat.getTemperature());
  });

  $("#temperature-down").click(function(){
    thermostat.downButton();
    $('#temperature').text(thermostat.getTemperature());
  });


  $("#temperature-reset").click(function(){
    thermostat.reset();
    $('#temperature').text(thermostat.getTemperature());
  });


  $("#powersaving-on").click(function(){
    thermostat.setPowerMode('on');
    $('#power-saving-status').text('on')
  });


  $("#powersaving-off").click(function(){
    thermostat.setPowerMode('off');
    $('#power-saving-status').text('off')

  });

})
