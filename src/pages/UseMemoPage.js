import React from "react";
import Layout from "../layout";
import UseMemo from "../components/Functional/Memo/UseMemo";

const UseMemoPage = () => (
  <Layout
    heading='useMemo for cache values'
    FunctionalComponent={UseMemo}
    previous='/unmounteffect'
    next='/withoutContextAPI'
  />
);

export default UseMemoPage;
