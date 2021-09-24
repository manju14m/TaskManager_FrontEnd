import {
  Route,
  Redirect
} from 'react-router-dom';
import React from "react"
import {useSelector} from "react-redux"

export default function PublicRoute({ component:Component, ...rest }) {

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  return (
    <Route {...rest} render={props => (
      isAuthenticated ?
      <Redirect to="/tasks" />    
      : <Component {...props} />
  )} />
  );
}