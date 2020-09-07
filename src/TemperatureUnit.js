import React, { useState } from "react";
import "./TemperatureUnit.css";

export default function TemperatureUnit(props) {
  const [unit, setUnit] = useState("celsius");
  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="TemperatureUnit">
        <span className="Temperature">{Math.round(props.celsius)}</span>
        <span className="units">
          °C |{" "}
          <a href="/" onClick={convertFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="TemperatureUnit">
        <span className="Temperature">{Math.round(fahrenheit())}</span>
        <span className="units">
          <a href="/" onClick={convertCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
