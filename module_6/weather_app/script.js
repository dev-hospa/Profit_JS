/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

// API_KEY for maps api
let API_KEY = "fba283876b0b7182b2f622c281ebbab5";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=prague&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //HINT: Use template literals to create a url with input and an API key
  let unit = getUnit();
  const fullURL = `${URL}?q=${city}&appid=${API_KEY}&units=${unit}`;
  let weatherPromise = fetch(fullURL);
  return weatherPromise.then((response) => {
    return response.json();
  })
}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
searchCity = () => {
  const city = document.getElementById('city-input').value;
  getWeatherData(city).then((response) => {
    showWeatherData(response);
  }).catch((error) => {
    console.log(error);
    console.log("something happened");
  })
}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
showWeatherData = (weatherData) => {
  document.getElementById("city-name").innerHTML = document.getElementById('city-input').value;
  document.getElementById("weather-type").innerHTML = weatherData.weather[0].main;
  document.getElementById("temp").innerHTML = weatherData.main.temp;
  document.getElementById("min-temp").innerHTML = weatherData.main.temp_min;
  document.getElementById("max-temp").innerHTML = weatherData.main.temp_max;
  let iconId = weatherData.weather[0].icon;
  let iconLink = `http://openweathermap.org/img/wn/${iconId}@2x.png`;
  document.getElementById("weather-icon").setAttribute("src", iconLink)
}

const getUnit = () => {
  if(document.getElementById("metric").checked) {
    return "metric";
  } else {
    return "imperial";
  }
}
