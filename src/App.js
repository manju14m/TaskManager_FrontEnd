import './App.css';
import TaskPage from "./pages/Task"
import {useEffect} from "react"
import store from "./store"
import {Provider} from "react-redux"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import LoginPage from "./components/LoginPage"
import RegisterPage from "./components/RegisterPage"
import PrivateRoute from "./PrivateRoute"
import PublicRoute from "./PublicRoute"
import {useDispatch} from 'react-redux'

import {LOGIN_SUCCESS} from "./actions/Types"

function App(){

  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("user"))
  const isAuthenticated =  user?.token ? true : false
    if(isAuthenticated){
      dispatch({
        type:LOGIN_SUCCESS,
        payload:user
      })
    }

return(
  <Router>
      <Switch>
        <PublicRoute exact path="/" component={LoginPage} />
        <PublicRoute path="/register" component={RegisterPage} />
        <PrivateRoute path="/tasks" component={TaskPage} />
      </Switch>
  </Router>
  
)}

export default App;