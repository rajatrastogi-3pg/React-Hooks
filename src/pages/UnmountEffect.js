import React from "react";
import Layout from "../layout";
import UnmountEffect from "../components/FunctionBased/Effect/UnmountEffect";

const StateBasic = () => (
  <Layout
    heading="componentWillUnmount with useEffect"
    FunctionalComponent={UnmountEffect}
    previous="/effectupdate"
    next="/usememo"
  />
);

export default StateBasic;
