import React from "react";
import Layout from "../layout";
import ClassStateUpdate from "../components/ClassBased/State/StateUpdate";
import FunctinalStateUpdate from "../components/Functional/State/StateUpdate";

function UseStateTrick2() {
  return (
    <Layout
      heading='State Trick 2'
      FunctionalComponent={FunctinalStateUpdate}
      ClassComponent={ClassStateUpdate}
      previous='/statetrick1'
      next='/effectbasic'
    />
  );
}

export default UseStateTrick2;
