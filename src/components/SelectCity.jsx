import React from "react";

function SelectCity(props) {
  return (
    <>
      <div
        class="input-group mb-3"
        style={{ width: "400px", position: "relative", margin: "48vh auto" }}
      >
        <input
          type="text"
          class="form-control"
          placeholder="Add City"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          autoFocus
        />
        <button class="btn btn-secondary" type="button" id="button-addon2">
          Check
        </button>
      </div>
    </>
  );
}

export default SelectCity;
