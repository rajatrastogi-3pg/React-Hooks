import React, { useEffect, useState } from "react";

function BasicEffect() {
  const [mainCount, setMainCount] = useState(1);
  const [subCount, setSubCount] = useState(1);

  useEffect(() => {
    console.log("useEffect for mainCount called", mainCount);
    document.getElementById("mainCount").innerHTML = mainCount;
  }, [mainCount]);

  useEffect(() => {
    console.log("useEffect for subCount called");
    document.getElementById("subCount").innerHTML = subCount;
  });

  const handleMainCountUpdate = _ => {
    setMainCount(mainCount + 1);
  };

  const handleTestCountUpdate = _ => {
    setSubCount(subCount + 1);
  };

  return (
    <>
      <button onClick={handleMainCountUpdate}>
        Click Me to update Main Count
      </button>
      <br />
      <button onClick={handleTestCountUpdate}>
        Click Me to update Sub Count
      </button>
      <br />
      <span>Main count</span>
      <span id="mainCount" />
      <br />
      <span>Sub count</span>
      <span id="subCount" />
    </>
  );
}

export default BasicEffect;
