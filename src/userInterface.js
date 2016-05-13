var thermostat;
var city;

$(document).ready(function() {

  $("#headline").text('Thermostat');
  // get state from api
  $.get( "http://localhost:4567/state", function(data) {
    console.log(data);

    // set state
    thermostat = new Thermostat(data.temperature);
    thermostat.setPowerMode(data.PSM);
    city = data.city;
    getCityTemperature (city);

    // then update UI:
    updateUI();
  });

  $("#temperature-up").click(function(){
    thermostat.upButton();
    updateUI();
  });

  $("#temperature-down").click(function(){
    thermostat.downButton();
    updateUI();
  });

  $("#temperature-reset").click(function(){
    thermostat.reset();
    updateUI();
  });

  $("#powersaving-on").click(function(){
    thermostat.setPowerMode('on');
    updateUI();
  });

  $("#powersaving-off").click(function(){
    thermostat.setPowerMode('off');
  });

  $("#city-selector").submit(function(event){
    city = $("#city-input").val();
    getCityTemperature (city);
    apiSaveCity(city);
    event.preventDefault();
  });

  function updateUI () {
    if (thermostat.isPowerSaving()) {
      $('#power-saving-status').text('on')
    } else {
      $('#power-saving-status').text('off')
    }

    $('#temperature')
      .text(thermostat.getTemperature())
      .attr('class', thermostat.displayColor());

    $('#city').text(city);  
  }
});
