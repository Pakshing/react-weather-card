import React from "react";
import logo from "./logo.svg";
import "./App.css";
import WeatherEngine from "./components/WeatherEngine";

function App() {
  return (
    <div className="App">
      <WeatherEngine location="Sacramento" />
      <WeatherEngine location="San Jose" />
      <WeatherEngine location="Hong Kong" />
    </div>
  );
}

export default App;
