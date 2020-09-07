import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      date: new date(response.data.dt * 1000),
      icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="Search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input type="Submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>

        <div className="row mt-5">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherData.icon}
                alt={weatherData.description}
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="units">°C | F </span>
              </div>
            </div>
            <ul>
              <li>
                <h3>{weatherData.city}</h3>
              </li>
              <li className="time">
                <formattedDate date={weatherData.date} />
              </li>
            </ul>
          </div>
          <div className="col-6">
            <div className="advice">
              <strong>Today's Advice:</strong> <br /> take an umbrella with you.
            </div>
            <ul className="additional">
              <li className="text-capitalize">{weatherData.description}</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "0b04f7882b2a886e7942aa9e854e4071";
    const units = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return "Loading...";
}
