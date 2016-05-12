var thermostat = new Thermostat();

$("#temperature-up").click(function(){
       thermostat.upButton();
   });

$("#temperature-down").click(function(){
      thermostat.downButton();
});


$("#temperature-reset").click(function(){
      thermostat.reset();
});


$("#powersaving-on").click(function(){
      thermostat.setPowerMode('on');
});


$("#powersaving-off").click(function(){
      thermostat.setPowerMode('off');
});
