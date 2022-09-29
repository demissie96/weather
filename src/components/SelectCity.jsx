import React, { useState } from "react";

let city;

function SelectCity({ selectCity }) {
  const [componentVisible, setComponentVisible] = useState(true);

  function sendCity() {
    selectCity(city);
    setComponentVisible(true);
  }

  return (
    <>
      <div
        className="input-group mb-3"
        style={{
          width: "400px",
          position: componentVisible ? "relative" : "absolute",
          margin: "48vh auto",
          visibility: componentVisible ? "visible" : "hidden",
        }}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Add City"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          autoFocus
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              sendCity();
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
            sendCity();
          }}
        >
          Check
        </button>
      </div>
    </>
  );
}

export default SelectCity;
