import React, { Component, useContext } from "react";

// first we will make a new context
const MyContext = React.createContext();

// Then create a Provider Component
class MyProvider extends Component {
  state = {
    name: "3Pillar Global",
    age: 100,
    cool: true
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          growAYearOlder: () =>
            this.setState({
              age: this.state.age + 1
            })
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

//--------Child Component Level-1--------//
const Family = props => (
  <div className="family">
    <Person />
  </div>
);

//--------Child Component Level-2--------//
const Person = () => {
  const context = useContext(MyContext);
  return (
    <div className="person">
      <React.Fragment>
        <p>Age: {context.state.age}</p>
        <p>Name: {context.state.name}</p>
        <button onClick={context.growAYearOlder}>Increase the Age</button>
      </React.Fragment>
    </div>
  );
};

//-------Parent Component-------//
class UseContext extends Component {
  render() {
    return (
      <MyProvider>
        <div align="center">
          <h2>Using useContext Hook</h2>
          <Family />
        </div>
      </MyProvider>
    );
  }
}

export default UseContext;
