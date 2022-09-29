import React, { useState } from "react";
import SelectCity from "./SelectCity";

function App() {
  const [city, setCity] = useState("");
  return (
    <>
      <SelectCity />
    </>
  );
}

export default App;
