import React, { Component } from "react";

const WeatherCard = (props) => {
  return (
    <div className="App">
      <div className="card">
        <div className="location">
          <h1 className="city">Sacramento</h1>
          <h3 className="country">CA</h3>
        </div>

        <img className="icon" src="./img/sunny.png" alt="weather-icon" />
        <h1 className="temp">30 °C</h1>
        <h3 className="condition">Sunny</h3>
      </div>
    </div>
  );
};

export default WeatherCard;
