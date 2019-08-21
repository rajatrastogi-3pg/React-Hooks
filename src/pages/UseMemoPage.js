import React from "react";
import Layout from "../layout";
import UseMemo from "../components/FunctionBased/Memo/UseMemo";

const UseMemoPage = () => (
  <Layout
    heading="useMemo for cache values"
    FunctionalComponent={UseMemo}
    previous="/unmounteffect"
    next="/withoutContextAPI"
  />
);

export default UseMemoPage;
