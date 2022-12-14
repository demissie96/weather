import React from "react";
import "./Button.css";

function Button({ changeCity }) {
  return (
    <>
      <button
        type="button"
        className="btn btn-outline-primary change-city-button"
        onClick={() => {
          // Trigger parent function
          changeCity();
        }}
      >
        Change City
      </button>
    </>
  );
}

export default Button;
