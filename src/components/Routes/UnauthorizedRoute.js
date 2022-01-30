import React, { useMemo } from "react";
import { Route, Redirect } from "react-router-dom";
import _ from "lodash";

const UnauthorizedRoute = ({ component: Component, ...restOfProps }) => {

  const isAuthenticated = !_.isEmpty(localStorage.getItem("token"));

  return (
    <Route {...restOfProps}
           render={(props) =>
             isAuthenticated ? <Redirect to="/home"/> : <Component {...props} />
           }
    />
  );
}

export default UnauthorizedRoute;
