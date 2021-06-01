import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import { Home } from "./Home";
import { PageNotFound } from "./PageNotFound";

export const RootRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/404" component={PageNotFound} />

      <Redirect to="/404" />
    </Switch>
  );
};
