import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div>
      <h5>5 Day Forecast</h5>
      <div className="Forecast row">
        <div className="col-1">
          <ul>
            <li>Tue</li>
            <li>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="partly cloudy"
              />
            </li>
            <li>
              <strong>25°</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
