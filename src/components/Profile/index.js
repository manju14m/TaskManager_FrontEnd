import React,{useState} from 'react'
import Button from 'components/Button'
import {logout} from "../../actions"
import {useDispatch, useSelector} from "react-redux"

export default function Profile() {

const dispatch = useDispatch()
const user = useSelector(state => state.auth.userInfo.name)
const [show,setShow] = useState(false)

const logoutHandler = () =>{
  dispatch(logout())
}

  return (
    <>
    <div className="profile" onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
      {user && user[0].toUpperCase()}
      {
        show && <Button title="Logout" onClick={logoutHandler}/>
      }
    
    </div>
    </>
  )
}
