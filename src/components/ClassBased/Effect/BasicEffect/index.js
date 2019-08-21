import React, { Component } from "react";

export default class BasicEffect extends Component {
  state = {
    count: 1
  };
  handleUpdate = _ => {
    this.setState({
      count: this.state.count + 1
    });
  };

  componentDidMount() {
    console.log("componentDidMount called");
    document.title = this.state.count;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate called");
    document.title = this.state.count;
  }

  render() {
    return <button onClick={this.handleUpdate}>Click Me</button>;
  }
}
