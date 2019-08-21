import React, { useState, useMemo } from "react";

const UseMemo = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  
  const isOdd = useMemo(() => {
    console.log("useMemo callback ran")
    let i = 0;
    while (i < 9999) i++;
    return counter1 % 2;
  }, [counter1]);

  return (
    <div>
      <div>
        <button onClick={() => setCounter1(count => count + 1)}>
          Click Me - {counter1}
        </button>
        <span>{isOdd ? "Odd" : "Even"}</span>
      </div>
      <div>
        <button onClick={() => setCounter2(count => count + 1)}>
          Click Me - {counter2}
        </button>
      </div>
    </div>
  );
};

export default UseMemo;
