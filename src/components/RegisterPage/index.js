import React,{useState,} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import{Link, useHistory} from 'react-router-dom'
import Divider from '@material-ui/core/Divider';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { registerUser } from "../../actions";



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




export default function RegisterPage() {

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

  const register = (e) => {
    
    e.preventDefault();

    if(user.name === ""){
      alert("Name is required");
      return;
    }

    if(user.password === ""){
      alert("Password is required");
      return;
    }
    dispatch(registerUser(user))
    history.push("/")
    setUser({
      name : "",
      password : ""
  
    })
  }


    return (
        <div className="container">
          <div className="form-holder">
            <h2>Register</h2>
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
                placeholder="Name"
                />
            </div>

            <div className="form-group">
            <input 
              name="password"
              className="form-control"
              type="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Password"
            />
            </div>
            <p>Already a member yet? <Link to="/">Login</Link></p>
            <div className="form-group">

            <button onClick={register} className={classes.loading}>
              {auth.authenticating ?  <CircularProgress  style={{color:"white"}} /> : "Register"}
              </button>
            </div>
            </form>
            </div>
        </div>
    )
}
