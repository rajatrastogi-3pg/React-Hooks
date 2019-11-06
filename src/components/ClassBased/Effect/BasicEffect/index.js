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
    document.title = this.state.count;
    document.getElementById("countHeadingClass").innerHTML = this.state.count;
  }

  componentDidUpdate() {
    document.title = this.state.count;
    document.getElementById("countHeadingClass").innerHTML = this.state.count;
  }

  render() {
    return (
      <>
        <button onClick={this.handleUpdate}>Click Me</button>
        <br />
        <h1 id='countHeadingClass'>...</h1>
      </>
    );
  }
}
