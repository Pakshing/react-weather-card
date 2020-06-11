import React from "react";
import logo from "./logo.svg";
import "./App.css";
import WeatherCard from "./components/WeatherCard/component";
/*
api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
d5ccd24213130a62da304adedfc0ece7
*/

function App() {
  const data = async () => {
    const apiRes = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=Sacramento&units=metric&appid=d5ccd24213130a62da304adedfc0ece7"
    );
    const resJSON = await apiRes.json();
    return resJSON;
  };

  data().then((res) => {
    console.log(res);
  });

  return (
    <div className="App">
      <WeatherCard temp={30} condition="Clear" city="Sydney" country="AU" />;
      <WeatherCard
        temp={-20}
        condition="Clouds"
        city="Hong Kong"
        country="CH"
      />
      ;
    </div>
  );
}

export default App;
