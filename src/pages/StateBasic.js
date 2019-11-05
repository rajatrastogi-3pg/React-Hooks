import React from "react";
import Layout from "../layout";
import FunctionalStateBasicCounter from "../components/Functional/State/BasicCounter";
import ClassStateBasicCounter from "../components/ClassBased/State/BasicCounter";

const StateBasic = () => (
  <Layout
    heading='State basic use'
    FunctionalComponent={FunctionalStateBasicCounter}
    ClassComponent={ClassStateBasicCounter}
    next='/statetrick1'
  />
);

export default StateBasic;
