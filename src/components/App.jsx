import React, { useState } from "react";
import SelectCity from "./SelectCity";
import ShowWeather from "./ShowWeather";
import axios from "axios";

const openWeatherUrl = "https://api.openweathermap.org/data/2.5/weather";
const openWeatherAPIKey = process.env.REACT_APP_OPEN_WEATHER_KEY;
let city;
let iconNum;
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
        weatherID = response.data.weather[0].id;
        weatherMain = response.data.weather[0].main;
        weatherCity = response.data.name;
        weatherTemp = Math.round(response.data.main.temp);
        weatherHumidity = response.data.main.humidity;
        weatherCountry = response.data.sys.country;
        if (weatherID >= 500 && weatherID <= 504) {
          iconNum = "10";
        } else if (weatherID >= 520 && weatherID <= 531) {
          iconNum = "09";
        } else if (weatherID === 511) {
          iconNum = "13";
        } else if (weatherID >= 200 && weatherID <= 232) {
          iconNum = "11";
        } else if (weatherID >= 300 && weatherID <= 321) {
          iconNum = "09";
        } else if (weatherID >= 600 && weatherID <= 622) {
          iconNum = "13";
        } else if (weatherID >= 700 && weatherID <= 781) {
          iconNum = "50";
        } else if (weatherID >= 803 && weatherID <= 804) {
          iconNum = "04";
        } else if (weatherID === 800) {
          iconNum = "01";
        } else if (weatherID === 801) {
          iconNum = "02";
        } else if (weatherID === 802) {
          iconNum = "03";
        }
        weatherIcon = `https://openweathermap.org/img/wn/${iconNum}d@2x.png`;
        console.log(
          `${weatherCity}, ${weatherCountry}, ${weatherID}, ${weatherMain}, ${weatherTemp}, ${weatherHumidity}`
        );
        setWeatherPageVisibility(true);
        setInputVisibility(false);
      })
      .catch(function (error) {
        // handle error
        alert(`${error.response.data.message.toUpperCase()}...`);
        document.getElementById("city-input").value = "";
        document.getElementById("city-input").focus();
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
