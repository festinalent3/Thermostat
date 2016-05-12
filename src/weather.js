function getCityTemperature (city) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid='+apiKey,
  function(response) {
    $('#current-temperature').text(response.main.temp)
  });
}
