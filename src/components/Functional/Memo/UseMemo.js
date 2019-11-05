import React, { useState } from "react";

const UseMemo = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const isOdd = () => {
    console.time();
    let i = -9999999;
    while (i < 99999999) i++;
    while (i > -99999999) i--;
    while (i < 99999999) i++;
    while (i > -99999999) i--;
    while (i < 99999999) i++;
    while (i > -99999999) i--;
    while (i < 99999999) i++;
    while (i > -99999999) i--;
    while (i < 99999999) i++;
    while (i > -99999999) i--;
    while (i < 99999999) i++;
    while (i > -99999999) i--;
    console.timeEnd();
    return counter1 % 2;
  };

  return (
    <div>
      <div>
        <button onClick={() => setCounter1(count => count + 1)}>
          Click Me :- {counter1}
        </button>
        <span>{isOdd() ? "Odd" : "Even"}</span>
      </div>
      <div>
        <button onClick={() => setCounter2(count => count + 1)}>
          Click Me :- {counter2}
        </button>
      </div>
    </div>
  );
};

export default UseMemo;
