import React, { useEffect, useState } from "react";

export const DemoUseEffect = () => {
  const [userCount, setUserCount] = useState(10);
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=${userCount}`)
      .then(res => res.json())
      .then(res => {
        setUser(
          res.results.map(
            item => `${item.name.title} ${item.name.first} ${item.name.last}`
          )
        );
      });
  }, [userCount]);

  const handleAddMore = _ => {
    setUserCount(userCount + 5);
  };

  return (
    <div
      style={{
        height: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 0"
      }}>
      <h1>Welcome to useEffect Demo!!!</h1>
      {user.length ? (
        <>
          <ul>
            {user.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <button onClick={handleAddMore}>Show {userCount + 5} user</button>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};
