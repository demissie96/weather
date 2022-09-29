import React, { useState } from "react";
import SelectCity from "./SelectCity";
import ShowWeather from "./ShowWeather";

let city;

function App() {
  const [weatherPage, setWeatherPage] = useState(false);
  const [visibility, setVisibility] = useState(true);

  function selectCity(cityName) {
    city = cityName;
    setWeatherPage(true);
    setVisibility(false);
  }

  function changeCity() {
    setWeatherPage(false);
    city = null;
    setVisibility(true);
  }
  return (
    <>
      {visibility && <SelectCity selectCity={selectCity} />}
      {weatherPage && <ShowWeather city={city} changeCity={changeCity} />}
    </>
  );
}

export default App;
