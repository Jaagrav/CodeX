import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Editor from "../pages/editor/Editor";
import Home from "../pages/home/Home";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:editorIndex/:editorID" component={Editor} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default Routes;
