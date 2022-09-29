import React from "react";

let city;

function SelectCity({ selectCity }) {
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
