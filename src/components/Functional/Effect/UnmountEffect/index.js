import React, { useState, useEffect } from "react";

const UnmountEffect = () => {
  const [showMousePad, setShowMousePad] = useState(true);
  return (
    <>
      <button
        onClick={() => {
          setShowMousePad(!showMousePad);
        }}
      >
        {showMousePad ? "Unmount MousePad" : "Mount MousePad"}
      </button>
      <br />
      {showMousePad ? <MousePad /> : <h3> MousePad Unmounted</h3>}
    </>
  );
};

const MousePad = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePostion = e => {
    setX(e.clientX);
    setY(e.clientY);
    document.title = `(${e.clientX}, ${e.clientY})`;
  };

  useEffect(() => {
    window.addEventListener("mousemove", logMousePostion);
  }, []);

  return (
    <div>
      X cordinate - {x} Y cordinate - {y}
    </div>
  );
};

export default UnmountEffect;
