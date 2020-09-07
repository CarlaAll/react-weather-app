import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo row mt-5">
      <div className="col-6">
        <div className="clearfix">
          <div className="float-left">
            <WeatherIcon code={props.info.icon} />
          </div>

          <div className="float-left">
            <span className="temperature">
              {Math.round(props.info.temperature)}
            </span>
            <span className="units">°C | F </span>
          </div>
        </div>
        <ul>
          <li>
            <h3>{props.info.city}</h3>
          </li>
          <li className="time">
            <FormattedDate date={props.info.date} />
          </li>
        </ul>
      </div>
      <div className="col-6">
        <div className="advice">
          <strong>Today's Advice:</strong> <br /> take an umbrella with you.
        </div>
        <ul className="additional">
          <li className="text-capitalize">{props.info.description}</li>
          <li>Humidity: {props.info.humidity}%</li>
          <li>Wind: {props.info.wind} km/h</li>
        </ul>
      </div>
    </div>
  );
}
