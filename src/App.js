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
        <Route exact path="/auth/twitter/callback" component={AuthPage} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
