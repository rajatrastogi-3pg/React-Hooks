import React from "react";
import { Route } from "react-router-dom";
import StateBasic from "./pages/StateBasic";
import StateTrick1 from "./pages/StateTrick1";
import StateTrick2 from "./pages/StateTrick2";
import EffectBasic from "./pages/EffectBasic";
import UpdateEffect from "./pages/UpdateEffect";
import UnmountEffect from "./pages/UnmountEffect";
import UseMemoPage from "./pages/UseMemoPage";
import WithoutContextAPIPage from "./pages/WithoutContextAPI";
import ContextAPIPage from "./pages/ContextAPI";
import UseContextPage from "./pages/UseContext";


const Routes = () => (
  <>
    <Route component={StateBasic} path="/" exact />
    <Route component={StateTrick1} path="/statetrick1" />
    <Route component={StateTrick2} path="/statetrick2" />
    <Route component={EffectBasic} path="/effectbasic" />
    <Route component={UpdateEffect} path="/effectupdate" />
    <Route component={UnmountEffect} path="/unmounteffect" />
    <Route component={UseMemoPage} path="/usememo" />
    <Route component={WithoutContextAPIPage} path="/withoutContextAPI" />
    <Route component={ContextAPIPage} path="/contextAPI" />
    <Route component={UseContextPage} path="/useContext" />
  </>
);

export default Routes;
