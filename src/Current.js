import React, { useState } from "react";
import axios from "axios";

export default function Current() {
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayCurrentWeather(response) {
    setLoaded(true);
    setWeather({
      Location: response.data.name,

      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleClick(event) {
    event.preventDefault();

    const apiKey = "0b04f7882b2a886e7942aa9e854e4071";
    const units = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=15.3&lon=37.5&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayCurrentWeather);
  }

  let button = (
    <button type="Submit" onClick={handleClick}>
      {" "}
      Current{" "}
    </button>
  );

  if (loaded) {
    return (
      <div>
        {button}
        <ul>
          <li> Location: {weather.Location}</li>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return button;
  }
}
