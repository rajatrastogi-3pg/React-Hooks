import React from "react";
import Layout from "../layout";
import ContextAPI from "../components/ContextAPI/ContextAPI";

const ContextAPIPage = () => (
  <Layout
    heading=""
    ClassComponent={ContextAPI}
    previous="/withoutContextAPI"
    next="/useContext"
  />
);

export default ContextAPIPage;
