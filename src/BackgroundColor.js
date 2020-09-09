import React from "react";
import App from "./App";
import "./BackgroundColor.css";

export default function BackgroundColor(props) {
  let temp = Math.round(props.data.temperature);
  if (temp > -30 && temp <= -15) {
    return (
      <div className="cold-3">
        <App />
      </div>
    );
  } else if (temp > -15 && temp < -7.5) {
    return (
      <div className="cold-2">
        <App />
      </div>
    );
  } else if (temp >= -7.5 && temp <= 0) {
    return (
      <div className="cold-1">
        <App />
      </div>
    );
  } else if (temp > 0 && temp <= 5) {
    return (
      <div className="cold">
        <App />
      </div>
    );
  } else if (temp > 5 && temp <= 8) {
    return (
      <div className="warm-1">
        <App />
      </div>
    );
  } else if (temp > 8 && temp <= 11) {
    return (
      <div className="warm-2">
        <App />
      </div>
    );
  } else if (temp > 11 && temp <= 15) {
    return (
      <div className="warm-3">
        <App />
      </div>
    );
  } else if (temp > 15 && temp <= 20) {
    return (
      <div className="warm-4">
        <App />
      </div>
    );
  } else if (temp > 20 && temp <= 25) {
    return (
      <div className="warm-5">
        <App />
      </div>
    );
  } else if (temp > 25 && temp <= 30) {
    return (
      <div className="warm-6">
        <App />
      </div>
    );
  } else {
    return (
      <div className="warm-default">
        <App />
      </div>
    );
  }
}
