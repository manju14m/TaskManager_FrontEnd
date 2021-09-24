import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import Divider from '@material-ui/core/Divider';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { loginUser } from "../../actions";



const useStyles = makeStyles((theme) => ({
  loading:{
      display: 'flex',
      alignItems: "center",
      justifyContent:"center",
      color: "white",
      height:"40px",
      padding:"0 30%",
  },
  error:{
      color:"red",
      fontSize: "0.8em",

  }
}));


export default function LoginPage() {

  const classes = useStyles()

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const error = useSelector(state => state.auth.error)

  const history = useHistory()

  const [user, setUser] = useState({
    name : "",
    password : ""

  })

  const handleChange = (event) =>{
     setUser({ 
         ...user,
         [event.target.name] : event.target.value
     })
  }

  const userLogin = (e) => {
    e.preventDefault();

    if(user.name === ""){
      alert("Email is required");
      return;
    }
    if(user.password === ""){
      alert("Password is required");
      return;
    }
    dispatch(loginUser(user));
    history.replace("/")
    setUser({
      name : "",
      password : ""
    })
  }




    return (
      <div className="container">
        <div className="form-holder">
          <h2>LogIn</h2>
          <Divider/>
          <form>
            <h3>{error ? error : ""}</h3>
              <div className="form-group">
              <input 
              name="name"
              className="form-control"
              type="text"
              value={user.name}
              onChange={handleChange}
              placeholder="Enter UserName"
              />
          </div>

          <div className="form-group">
          <input 
            name="password"
            className="form-control"
            type="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Enter Password"
          />
          </div>
          <p>Not a member yet? <Link to="/register">Register</Link></p>
          <div className="form-group">
          <button onClick={userLogin} className={classes.loading}>
          {auth.authenticating ?  <CircularProgress style={{color:"white"}} /> : "Login"}
          </button>
          </div>
          </form>
          </div>
      </div>
    )
}
