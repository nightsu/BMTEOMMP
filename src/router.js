import React from "react";
import { Router, Route, Switch } from "dva/router";
import UserLayout from "./layouts/UserLayout";
import BasicLayout from "./layouts/BasicLayout";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/user" component={UserLayout} />
        <Route path="/" component={BasicLayout} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
