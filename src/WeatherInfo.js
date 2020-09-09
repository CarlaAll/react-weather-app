import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import TemperatureUnit from "./TemperatureUnit";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo row mt-5">
      <div className="col-6">
        <div className="clearfix">
          <div className="float-left">
            <WeatherIcon code={props.data.icon} />
          </div>
          <div className="float-left">
            <TemperatureUnit celsius={props.data.temperature} />
          </div>
        </div>
        <ul>
          <li>
            <h3>
              {props.data.city}, {props.data.land}
            </h3>
          </li>
          <li className="time">
            <FormattedDate date={props.data.date} />
          </li>
        </ul>
      </div>
      <div className="col-6">
        <div className="advice">
          <strong>Today's Advice:</strong> <br /> take an umbrella with you.
        </div>
        <ul className="additional">
          <li className="text-capitalize">{props.data.description}</li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind} km/h</li>
        </ul>
      </div>
    </div>
  );
}
