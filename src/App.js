import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./components/login/Login";

import './assets/styles/layout.css'
import './assets/styles/bootstrap.sass';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Login/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
