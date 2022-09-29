import React from "react";

let city = "";

function SelectCity({ selectCity }) {
  // Send city data to 'App' parent component.
  function sendCity() {
    selectCity(city);
  }

  return (
    <>
      <div
        className="input-group mb-3"
        style={{
          width: "400px",
          position: "relative",
          margin: "48vh auto",
          visibility: "visible",
        }}
      >
        <input
          id="city-input"
          type="text"
          className="form-control"
          placeholder="Budapest, HU"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          autoFocus
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              if (city != "") {
                sendCity();
              }
            }
          }}
          onChange={(e) => {
            city = e.target.value;
          }}
        />
        <button
          className="btn btn-secondary"
          type="button"
          id="button-addon2"
          onClick={() => {
            if (city != "") {
              sendCity();
            }
          }}
        >
          Check
        </button>
      </div>
    </>
  );
}

export default SelectCity;
