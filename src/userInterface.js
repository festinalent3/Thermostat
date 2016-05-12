var thermostat = new Thermostat();

$(document).ready(function() {

  $("#headline").text('Thermostat');
  updateTemp();

  $("#temperature-up").click(function(){
    thermostat.upButton();
    updateTemp();
  });

  $("#temperature-down").click(function(){
    thermostat.downButton();
    updateTemp();
  });

  $("#temperature-reset").click(function(){
    thermostat.reset();
    updateTemp();
  });

  $("#powersaving-on").click(function(){
    thermostat.setPowerMode('on');
    $('#power-saving-status').text('on')
    updateTemp();
  });

  $("#powersaving-off").click(function(){
    thermostat.setPowerMode('off');
    $('#power-saving-status').text('off')
  });

  function updateTemp () {
    $('#temperature').text(thermostat.getTemperature())
      .attr('class', thermostat.displayColor());
  }
})
