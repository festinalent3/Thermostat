'use strict';

function apiSaveTemperature (temp) {
  $.post( "http://localhost:4567/temperature", { temperature: temp } );
}

function apiSavePSM (status) {
  $.post( "http://localhost:4567/PSM", { PSM: status } );
}

function apiSaveCity (city) {
  $.post( "http://localhost:4567/city", { city: city } );
}

function apiGetState () {
  $.get( "http://localhost:4567/state", { temperature: temp } );
}
