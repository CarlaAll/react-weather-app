import React from "react";

import Weather from "./Weather";
import Forecast from "./Forecast.js";
import "./weatherapp.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Brussels" />
        <Forecast />
      </div>
      <footer className="link">
        <a
          href="https://github.com/CarlaAll/react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-Source Code
        </a>{" "}
        by Carla Allenbach
      </footer>
    </div>
  );
}
