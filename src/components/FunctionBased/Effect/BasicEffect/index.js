import React, { useEffect, useState } from "react";

function BasicEffect() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log("useEffect called");
    document.title = count;
  }, []);

  const handleUpdate = _ => {
    setCount(count + 1);
  };
  return <button onClick={handleUpdate}>Click Me</button>;
}

export default BasicEffect;
