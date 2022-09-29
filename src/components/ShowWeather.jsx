import React from "react";
import Button from "./Button";

function ShowWeather(props) {
  // Triggered by 'Button' child component
  function changeCity() {
    // Trigger parent function
    props.changeCity();
  }

  return (
    <>
      <Button changeCity={changeCity} />
      <div
        style={{
          position: "absolute",
          margin: "auto",
          width: "400px",
          textAlign: "center",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h1 style={{ marginBottom: "30px" }}>
          {props.city}, {props.country}
        </h1>
        <hr></hr>
        <div>
          <p
            style={{
              fontSize: "100px",
              position: "relative",
              backgroundColor: "#3F4E4F",
              borderRadius: "10px",
              margin: "40px",
            }}
          >
            {props.temp}
            <span
              style={{
                position: "relative",
                fontSize: "40px",
                verticalAlign: "text-top",
                top: "15px",
              }}
            >
              ˚C
            </span>
          </p>
          <div className="row">
            <div
              className="col"
              style={{
                backgroundColor: "#3F4E4F",
                borderRadius: "10px",
                position: "relative",
                margin: "0 10px 0",
              }}
            >
              <h2 style={{ margin: "20px 0 0" }}>{props.description}</h2>
              <img src={props.icon}></img>
            </div>
            <div
              className="col"
              style={{
                backgroundColor: "#3F4E4F",
                borderRadius: "10px",
                position: "relative",
                margin: "0 10px 0",
              }}
            >
              <div
                style={{
                  margin: "0",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <h2>{props.humidity} % </h2>
                <img src="/images/humidity.png" alt="Humidity" style={{ width: "60px"}}/>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowWeather;
