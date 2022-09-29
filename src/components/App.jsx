import React, { useState } from "react";
import SelectCity from "./SelectCity";
import ShowWeather from "./ShowWeather";
import axios from "axios";

const openWeatherUrl = "https://api.openweathermap.org/data/2.5/weather";
const openWeatherAPIKey = process.env.REACT_APP_OPEN_WEATHER_KEY;
let city;
let weatherID;
let weatherMain;
let weatherCity;
let weatherTemp;
let weatherCountry;
let weatherHumidity;
let weatherIcon;

function App() {
  const [weatherPageVisibility, setWeatherPageVisibility] = useState(false);
  const [inputVisibility, setInputVisibility] = useState(true);

  // Receive data from 'SelectCity' child component
  function selectCity(cityName) {
    city = cityName;
    axios
      .get(
        `${openWeatherUrl}?q=${city}&units=metric&appid=${openWeatherAPIKey}`
      )
      .then(function (response) {
        // handle success
        console.log(response.data);
        weatherID = response.data.weather[0].id;
        weatherMain = response.data.weather[0].main;
        weatherCity = response.data.name;
        weatherTemp = Math.round(response.data.main.temp);
        weatherHumidity = response.data.main.humidity;
        weatherCountry = response.data.sys.country;
        weatherIcon = `https://openweathermap.org/img/wn/11d@2x.png`
        console.log(
          `${weatherCity}, ${weatherCountry}, ${weatherID}, ${weatherMain}, ${weatherTemp}, ${weatherHumidity}`
        );
        setWeatherPageVisibility(true);
        setInputVisibility(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error.response.data.message);
      });
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
      {weatherPageVisibility && (
        <ShowWeather
          city={weatherCity}
          country={weatherCountry}
          id={weatherID}
          temp={weatherTemp}
          description={weatherMain}
          humidity={weatherHumidity}
          icon={weatherIcon}
          changeCity={changeCity}
        />
      )}
    </>
  );
}

export default App;
