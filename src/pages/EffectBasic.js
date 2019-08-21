import React from "react";
import Layout from "../layout";
import FunctionalEffectBasic from "../components/FunctionBased/Effect/BasicEffect";
import ClassEffectBasic from "../components/ClassBased/Effect/BasicEffect";

const StateBasic = () => (
  <Layout
    heading="Effect basic use"
    FunctionalComponent={FunctionalEffectBasic}
    ClassComponent={ClassEffectBasic}
    previous="/statetrick2"
    next="/effectupdate"
  />
);

export default StateBasic;
