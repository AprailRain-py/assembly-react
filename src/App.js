import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import SignIn from "./components/SignIn";
import AuthPage from "./components/AuthPage";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route
          exact
          path="https://practical-hoover-59ac07.netlify.app/auth/twitter/callback/auth/twitter/callback"
          component={AuthPage}
        />
        <Route
          exact
          path="https://practical-hoover-59ac07.netlify.app/home"
          component={Home}
        />
      </Switch>
    </Router>
  );
}

export default App;
