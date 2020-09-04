import React, { useState } from "react";
import axios from "axios";
import "./search.css";
import Current from "./Current";

export default function Search() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
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

  function handleSubmit(event) {
    event.preventDefault();

    const apiKey = "0b04f7882b2a886e7942aa9e854e4071";
    const units = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city.." onChange={updateCity} />
      <button type="Submit" className="btn btn-primary">
        {" "}
        Search
      </button>{" "}
      <Current />
    </form>
  );
  if (loaded) {
    return (
      <div>
        {form}
        <div className="row">
          <div className="col-6">
            <ul>
              <li>
                <img
                  className="weathericon"
                  src={weather.icon}
                  alt={weather.description}
                />{" "}
                {Math.round(weather.temperature)}°C
              </li>
              <li>
                <h3>{weather.Location}</h3>
              </li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li>Description: {weather.description}</li>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {weather.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
