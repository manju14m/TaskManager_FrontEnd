import {
  Route,
  Redirect
} from 'react-router-dom';
import React from "react"
import {useSelector} from "react-redux"

export default function PrivateRoute({ component:Component, ...rest }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  return (
    <Route {...rest} render={props => (
      isAuthenticated ?
          <Component {...props} />
      : <Redirect to="/" />
  )} />
  );
}