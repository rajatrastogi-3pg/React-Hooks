import React, { Component } from 'react';

//--------Child Component Level-1----------//
const Family = (props) => {
  return(
  <div className="family">
    <Person name={props.name}/>
  </div>
)}


//--------Child Component Level-2----------//
class Person extends Component {
  render() {
    return (
      <div className="person">
          <h2>Name: {this.props.name}</h2>
      </div>
    )
  }
}

//--------Parent Component---------//
class WithoutContextAPI extends Component {
  state = {
    name: '3Pillar Global',
    age: 100,
    cool: true
  }

  render() {
    return (
        <div align='center'>
          <h2>Without ContextAPI</h2>
          <h3>Problem Statement</h3>
          <p>Whenever a parent component pass props to it’s child component, explicitly have to pass it through every level of that tree.</p>
          <Family name={this.state.name}/> {/*passing props to its child component*/}
        </div>
    );
  }
}

export default WithoutContextAPI;
