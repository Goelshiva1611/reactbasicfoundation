import React, { useState } from "react";
import Button from "./button";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("yellow");

  const handleBackgroundColorChange = (color) => {
    console.log("Clicked color:", color);
    setBackgroundColor(color);
  };

  return (
    <div style={{ backgroundColor }}>
      <h1 className="font-mono from-neutral-950 text-lg">
        Hello This is our First project Background changer
      </h1>
      <Button color="Red" name="red" onClick={handleBackgroundColorChange} />
      <Button color="Yellow" name="yellow" onClick={handleBackgroundColorChange} />
      <Button color="Green" name="green" onClick={handleBackgroundColorChange} />
      {/* Add more Button components for other colors */}
    </div>
  );
}

export default App;
