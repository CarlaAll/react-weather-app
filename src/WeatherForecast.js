import React, { useState } from "react";
import WeatherForecastPreview from "./WeatherForecastPreview";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }
  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecast row">
        <WeatherForecastPreview data={forecast.list[0]} />
        <WeatherForecastPreview data={forecast.list[1]} />
        <WeatherForecastPreview data={forecast.list[2]} />
        <WeatherForecastPreview data={forecast.list[3]} />
        <WeatherForecastPreview data={forecast.list[4]} />
      </div>
    );
  } else {
    let apiKey = "a1819ac2175222ef43761a4da2a13963";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleForecastResponse);

    return null;
  }
}
