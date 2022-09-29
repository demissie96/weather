import React from "react";
import Button from "./Button";

function ShowWeather(props) {
    
  function changeCity() {
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
        <h1 style={{ marginBottom: "30px" }}>{props.city}</h1>
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
            {props.temperature}15
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
              <h3
                style={{
                  margin: "10px",
                }}
              >
                Cloudy ☁️
              </h3>
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
              <p
                style={{
                  fontSize: "20px",
                  margin: "0",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                20/5 ˚C
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowWeather;
