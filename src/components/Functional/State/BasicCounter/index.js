import React from "react";

const BasicCounter = () => {
  const handleUp = _ => {
    //handle up here
  };

  const handleDown = _ => {
    //handle down here
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
      }}
    >
      <button onClick={handleUp}>UP!!!!</button>
      <h3>0</h3>
      <button onClick={handleDown}>DOWN!!!!</button>
    </div>
  );
};

export default BasicCounter;
