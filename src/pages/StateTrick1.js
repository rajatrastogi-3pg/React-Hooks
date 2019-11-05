import React from "react";
import Layout from "../layout";
import FunctionalStateTrick1 from "../components/Functional/State/Trick1";

function UseStateTrick1() {
  return (
    <Layout
      heading='State Use Case'
      FunctionalComponent={FunctionalStateTrick1}
      previous='/'
      next='/statetrick2'
    />
  );
}

export default UseStateTrick1;
