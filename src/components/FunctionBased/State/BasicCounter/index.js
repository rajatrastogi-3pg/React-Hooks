import React, { useState } from "react";

const BasicCounter = () => {
  const [count, setCount] = useState(0);
  
  const handleUp = _ => {
    setCount(count + 1);
  };
  
  const handleDown = _ => {
    setCount(count - 1);
  };
  
  return (
    <div
      style={{
        height: "inherit",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}>
      <button onClick={handleUp}>UP!!!!</button>
      <h3>{count}</h3>
      <button onClick={handleDown}>DOWN!!!!</button>
    </div>
  );
};

export default BasicCounter;
