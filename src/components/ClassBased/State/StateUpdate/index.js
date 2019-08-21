import React, { Component } from "react";

export default class StateUpdate extends Component {
  state = {
    firstName: null,
    lastName: null
  };
  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  render() {
    return (
      <div
        style={{
          height: "inherit",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}>
        <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          placeholder="First Name"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          name="lastName"
          value={this.state.lastName}
          placeholder="Last Name"
          onChange={this.handleChange}
        />
        <br />
        <span>{JSON.stringify(this.state)}</span>
      </div>
    );
  }
}
