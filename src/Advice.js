import React from "react";

export default function Advice(props) {
  let descripition = props.descripition;

  if (descripition === "rain") {
    descripition = `Take an umbrella with you. `;
  } else {
    descripition = `stay cool today. `;
  }
  return `${descripition}`;
}
