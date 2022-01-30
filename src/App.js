import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";

import './assets/styles/layout.css'
import './assets/styles/bootstrap.sass';
import Home from "./components/Home/Home";
import Quote from "./components/Quote/Quote";
import Todo from "./components/Todo/Todo";
import ManageTask from "./components/ManageTask/ManageTask";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/sign-up">
            <SignUp/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/quote">
            <Quote/>
          </Route>
          <Route path="/todo">
            <Todo/>
          </Route>
          <Route path="/task/new">
            <ManageTask/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
