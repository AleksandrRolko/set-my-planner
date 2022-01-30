import React, { useMemo } from "react";
import { Route, Redirect } from "react-router-dom";
import _ from "lodash";

const ProtectedRoute = ({ component: Component, ...restOfProps }) => {

  const isAuthenticated = !_.isEmpty(localStorage.getItem("token"));

  return (
    <Route {...restOfProps}
           render={(props) =>
             isAuthenticated ? <Component {...props} /> : <Redirect to="/login"/>
           }
    />
  );
}

export default ProtectedRoute;
