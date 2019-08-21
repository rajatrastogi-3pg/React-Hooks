import React from "react";
import Layout from "../layout";
import UpdateEffect from "../components/FunctionBased/Effect/UpdateEffect";

const StateBasic = () => (
  <Layout
    heading="componentWillUpdate with useEffect"
    FunctionalComponent={UpdateEffect}
    previous="/effectbasic"
    next="/unmounteffect"
  />
);

export default StateBasic;
