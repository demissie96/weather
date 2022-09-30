import React from "react";
import Button from "./Button";
import "./ShowWeather.css";

function ShowWeather(props) {
  // Triggered by 'Button' child component
  function changeCity() {
    // Trigger parent function
    props.changeCity();
  }

  return (
    <>
      <Button changeCity={changeCity} />
      <div id="city-div">
        <h1>
          {props.city}, {props.country}
        </h1>
        <hr></hr>
        <div>
          <p id="temp">
            {props.temp}
            <span id="celsius">˚C</span>
          </p>
          <div className="row">
            <div className="col">
              <h2 id="weather-description">{props.description}</h2>
              <img src={props.icon} alt="icon"></img>
            </div>
            <div className="col">
              <div>
                <img
                  id="humidity-icon"
                  src="/images/humidity2.png"
                  alt="Humidity"
                />
                <h2 id="humidity-number">{props.humidity} %</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowWeather;
