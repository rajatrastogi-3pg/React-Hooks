import React, { useState } from "react";

const Trick1 = () => {
  const [count, setCount] = useState(0);
  
  const handleUp = _ => {
    for (let i = 0; i < 5; i++) {
      setCount(oldcount => oldcount + 1);
    }
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
      <button onClick={handleUp}>UP by 5</button>
      <h3>{count}</h3>
    </div>
  );
};

export default Trick1;
