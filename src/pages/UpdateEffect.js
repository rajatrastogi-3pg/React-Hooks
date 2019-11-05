import React from "react";
import Layout from "../layout";
import UpdateEffect from "../components/Functional/Effect/UpdateEffect";

const StateBasic = () => (
  <Layout
    heading='componentDidUpdate with useEffect'
    FunctionalComponent={UpdateEffect}
    previous='/effectbasic'
    next='/unmounteffect'
  />
);

export default StateBasic;
