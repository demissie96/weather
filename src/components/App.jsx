import React, { useState } from "react";
import SelectCity from "./SelectCity";
import ShowWeather from "./ShowWeather";

let city;

function App() {
  const [weatherPage, setWeatherPage] = useState(false);

  function selectCity(cityName) {
    city = cityName;
    console.log(city);
    setWeatherPage(true);
  }
  return (
    <>
      <SelectCity selectCity={selectCity} />
      {weatherPage && <ShowWeather city={city} />}
    </>
  );
}

export default App;
