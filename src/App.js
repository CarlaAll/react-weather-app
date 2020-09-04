import React from "react";

import Search from "./Search";
import "./weatherapp.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
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
    </div>
  );
}
