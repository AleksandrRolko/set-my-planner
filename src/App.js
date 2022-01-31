import React from "react";
import { BrowserRouter as Router, Switch } from 'react-router-dom';
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
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import UnauthorizedRoute from "./components/Routes/UnauthorizedRoute";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <UnauthorizedRoute path="/login" component={Login}/>
          <UnauthorizedRoute path="/sign-up" component={SignUp}/>
          <ProtectedRoute path="/home" component={Home}/>
          <ProtectedRoute path="/quote" component={Quote}/>
          <ProtectedRoute path="/todo" component={Todo}/>
          <ProtectedRoute path="/task/new" component={ManageTask}/>
          <ProtectedRoute path="/task/:taskId/edit" component={ManageTask}/>
          <ProtectedRoute path="/phonebook" component={Phonebook}/>
          <ProtectedRoute path="/person/:personId" component={Person}/>
          <ProtectedRoute path="/" component={Home}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
