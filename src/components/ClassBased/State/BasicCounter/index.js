import React, { Component } from "react";

export default class BasicCounter extends Component {
  state = {
    count: 0
  };
  handleUp = e => {
    this.setState({
      count: this.state.count + 1
    });
  };
  handleDown = e => {
    this.setState({
      count: this.state.count - 1
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
        <button onClick={this.handleUp}>UP!!!!</button>
        <h3>{this.state.count}</h3>
        <button onClick={this.handleDown}>DOWN!!!!</button>
      </div>
    );
  }
}
