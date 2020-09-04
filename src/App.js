import React from "react";

import Search from "./Search";
import "./weatherapp.css";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <Search />
      </div>
      <span className="link">
        <a href="https://github.com/CarlaAll/react-weather-app" target="_blank">
          Open-Source Code
        </a>{" "}
        by Carla Allenbach
      </span>
    </div>
  );
}
