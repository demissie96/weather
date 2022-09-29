import React, { useState } from "react";
import SelectCity from "./SelectCity";
import ShowWeather from "./ShowWeather";

let city;

function App() {
  const [weatherPageVisibility, setWeatherPageVisibility] = useState(false);
  const [inputVisibility, setInputVisibility] = useState(true);

  // Receive data from 'SelectCity' child component
  function selectCity(cityName) {
    city = cityName;
    setWeatherPageVisibility(true);
    setInputVisibility(false);
  }

  // Triggered by 'Button' component that is inside 'ShowWeather' component.
  function changeCity() {
    setWeatherPageVisibility(false);
    city = null;
    setInputVisibility(true);
  }
  return (
    <>
      {inputVisibility && <SelectCity selectCity={selectCity} />}
      {weatherPageVisibility && <ShowWeather city={city} changeCity={changeCity} />}
    </>
  );
}

export default App;
