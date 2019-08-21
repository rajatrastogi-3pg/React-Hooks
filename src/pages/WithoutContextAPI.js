import React from "react";
import Layout from "../layout";
import WithoutContextAPI from "../components/ContextAPI/WithoutContextAPI";

const WithoutContextAPIPage = () => (
  <Layout
    heading=""
    ClassComponent={WithoutContextAPI}
    previous="/usememo"
    next="/contextAPI"
  />
);

export default WithoutContextAPIPage;
