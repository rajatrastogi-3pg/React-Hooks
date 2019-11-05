import React, { useEffect, useState } from "react";

function BasicEffect() {
  const [count, setCount] = useState(1);

  // useEffect(() => {
  //   document.title = count;
  //   document.getElementById("countHeading").innerHTML = count;
  // });

  const handleUpdate = _ => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={handleUpdate}>Click Me</button>
      <br />
      <h1 id='countHeading'>...</h1>
    </>
  );
}

export default BasicEffect;
