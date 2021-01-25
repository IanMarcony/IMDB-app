import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default Routes;
