import {GET_TASK, ADD_TASK} from './Types'
import {LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS,REGISTER_REQUEST, REGISTER_FAILURE, REGISTER_SUCCESS,LOGOUT} from "./Types"

import get from "../utils/api/get"
import post from "../utils/api/post"
import update from "../utils/api/update"
import register from "../utils/api/register"
import login from "../utils/api/login"
import deleteTaskById from "../utils/api/deleteTaskById"

let config = {
  headers :{
    "Content-Type" : "application/json"
  }
}

export const getTask =() => {  
return async (dispatch,getState) => {

  const {token} = getState().auth.userInfo
  config.headers["x-auth-token"] = token

   await get(config)
    .then((res)=>{
        if(res.status === 200){
            dispatch({
                type : GET_TASK,
                payload:res.data
            })
        }})
    .catch(err => console.log(err.response))
}
}

export const addTask = (body,refreshTask) => {  
return async (dispatch, getState) => {

  const {token} = getState().auth.userInfo
  config.headers["x-auth-token"] = token

    await post(body,config)
    .then((res)=>{
      refreshTask();
        if(res.status === 201){
            dispatch({
                type : ADD_TASK,
                payload:res.data
            })
        }})
    .catch(err => console.log(err.response))
}
}

export const updateTask = (id,body,refreshTask) => { 
  return async (dispatch, getState) => {

    const {token} = getState().auth.userInfo
    config.headers["x-auth-token"] = token

      await update(id,body,config)
      .then((res)=>{
          if(res.status === 200){
            refreshTask()
          }})
      .catch(err => console.log(err.response))
  }
  }

export const deleteTask = (id,refreshTask) => {  
  return async (dispatch,getState) => {

    const {token} = getState().auth.userInfo
    config.headers["x-auth-token"] = token

    await deleteTaskById(id, config)
      .then((res)=>{
          if(res.status === 200){
            refreshTask()
          }})
      .catch(err => console.log(err.response))
  }
  }    

export const registerUser =(body)=>{ 
    return async (dispatch) =>{
      dispatch({
        type:REGISTER_REQUEST,
      })
        await register(body)
        .then((res)=>{
          if(res.status === 201){
            dispatch({
              type:REGISTER_SUCCESS,
              payload:res.data.user
            })
            localStorage.setItem('user', JSON.stringify(res.data.user));
          }
          else{
            dispatch({
              type:REGISTER_FAILURE,
              payload:res.data.msg
        })
          }
        })
        .catch(err => dispatch({
          type:REGISTER_FAILURE,
          payload:err
    })) 
    }
}

export const loginUser =(body)=>{ 
  return async (dispatch) =>{
      dispatch({
        type:LOGIN_REQUEST,
      })
      await login(body)
      .then((res)=>{
        if(res.status === 201){
          dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data.user
          })
          localStorage.setItem('user', JSON.stringify(res.data.user));
        }
        else {
          dispatch({
            type:LOGIN_FAILURE,
            payload:res.data.msg
      })
        }
        
      })
      .catch(err =>
         dispatch({
        type:LOGIN_FAILURE,
        payload:err
  })
  )
}
}

export const logout = ()=>{
  return (dispatch) =>{
    localStorage.clear()
  dispatch({
    type:LOGOUT
})
  }
}