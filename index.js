function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}
let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

function covertToFahrenheit(event) {
  event.preventDefault();
  let tempElement = document.querySelector("#temperature");
  tempElement.innerHTML = 66;
}
let linkFahrenheit = document.querySelector("#fahrenheit-link");
linkFahrenheit.addEventListener("click", covertToFahrenheit);

function covertToCelsius(event) {
  event.preventDefault();
  let tempElement = document.querySelector("#temperature");
  tempElement.innerHTML = 19;
}
let linkCelsius = document.querySelector("#celsius-link");
linkCelsius.addEventListener("click", covertToCelsius);

//HW week 5
function showWeather(response) {
  console.log(response);
  let temp = document.querySelector("#temperature");
  let currentTemp = Math.round(response.data.main.temp);
  temp.innerHTML = `${currentTemp}`;
  let speed = document.querySelector("#wind-speed");
  let currentSpeed = Math.round(response.data.wind.speed);
  speed.innerHTML = `${currentSpeed} km/h`;
  let humidity = document.querySelector("#humidity");
  let currentHumidity = response.data.main.humidity;
  humidity.innerHTML = `${currentHumidity} %`;
}

function showCity(event) {
  event.preventDefault();

  let h1 = document.querySelector("#city");
  let searchInput = document.querySelector("#city-input");
  h1.innerHTML = searchInput.value;
  let apiKey = "9eca7aac0b071aa16e3cb063adba0785";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&wind&humidity&units=metric&appid=${apiKey}`;

  axios.get(apiUrl).then(showWeather);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", showCity);
