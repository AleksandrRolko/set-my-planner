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
import Phonebook from "./components/Phonebook/Phonebook";
import Person from "./components/Person/Person";

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
          <Route path="/task/:taskId/edit">
            <ManageTask/>
          </Route>
          <Route path="/phonebook">
            <Phonebook/>
          </Route>
          <Route path="/person/:personId">
            <Person/>
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
