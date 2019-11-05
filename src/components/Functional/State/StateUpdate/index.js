import React, { useState } from "react";

const StateUpdate = () => {
  const [state, setState] = useState({
    firstName: null,
    lastName: null
  });

  const handleChange = evt => {
    setState({
      [evt.target.name]: evt.target.value
    });
  };

  return (
    <div
      style={{
        height: "inherit",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <input
        type='text'
        name='firstName'
        value={state.firstName}
        placeholder='First Name'
        onChange={handleChange}
      />
      <br />
      <input
        type='text'
        name='lastName'
        value={state.lastName}
        placeholder='Last Name'
        onChange={handleChange}
      />
      <br />
      <span>{JSON.stringify(state)}</span>
    </div>
  );
};

export default StateUpdate;
