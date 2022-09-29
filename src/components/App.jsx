import React from "react";
import SelectCity from "./SelectCity";

let city;

function App() {

  function selectCity(cityName) {
    city = cityName;
    console.log(city);
  }
  return (
    <>
      <SelectCity selectCity={selectCity}/>
    </>
  );
}

export default App;
