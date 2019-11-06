import React, { useEffect, useState } from "react";

function BasicEffect() {
  const [count, setCount] = useState(1);

  // useEffect(() => {
  //   document.title = count;
  //   document.getElementById("countHeadingFunctionl").innerHTML = count;
  // });

  const handleUpdate = _ => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={handleUpdate}>Click Me</button>
      <br />
      <h1 id='countHeadingFunctionl'>...</h1>
    </>
  );
}

export default BasicEffect;
