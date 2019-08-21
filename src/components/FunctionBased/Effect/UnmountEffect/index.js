import React, { useState, useEffect } from "react";

const UnmountEffect = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  
  const logMousePostion = e => {
    console.log("set Mouse cordinates");
    setX(e.clientX);
    setY(e.clientY);
  };
  
  useEffect(() => {
    window.addEventListener("mouseover", logMousePostion);
    return () => {
      window.removeEventListener("mouseover", logMousePostion);
    };
  }, []);
  
  return (
    <div>
      X cordinate - {x} Y cordinate - {y}
    </div>
  );
};

export default UnmountEffect;
