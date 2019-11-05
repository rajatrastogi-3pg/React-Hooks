import React, { useEffect, useState } from "react";

function BasicEffect() {
  const [mainCount, setMainCount] = useState(1);
  const [subCount, setSubCount] = useState(1);

  useEffect(() => {
    const ol = document.getElementById("logBoard");
    const li = document.createElement("li");
    li.appendChild(document.createTextNode("Effect for main counter called"));
    ol.appendChild(li);
  });

  useEffect(() => {
    const ol = document.getElementById("logBoard");
    const li = document.createElement("li");
    li.appendChild(document.createTextNode("Effect for sub counter called"));
    ol.appendChild(li);
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
      <span id='mainCount'>{mainCount}</span>
      <br />
      <span>Sub count</span>
      <span id='subCount'>{subCount}</span>
      <hr />
      <h2>Logger</h2>
      <ul id='logBoard' />
    </>
  );
}

export default BasicEffect;
