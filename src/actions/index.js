import {GET_TASK, ADD_TASK, UPDATE_TASK, DELETE_TASK} from './Types'
import get from "../utils/api/get"
import post from "../utils/api/post"


export const getTask =() => {  
return async (dispatch) => {
   await get()
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

export const addTask = (body) => {  
return async (dispatch) => {
    post(body)
    .then((res)=>{
        if(res.status === 201){
            dispatch({
                type : ADD_TASK,
                payload:res.data
            })
        }})
    .catch(err => console.log(err.response))
}
}

export const updateTask = () => {  
  return async (dispatch) => {
      get(URL)
      .then((res)=>{
          if(res.status === 200){
              dispatch({
                  type : UPDATE_TASK,
                  payload:res.data
              })
          }})
      .catch(err => console.log(err.response))
  }
  }

export const deleteTask = () => {  
  return async (dispatch) => {
      get(URL)
      .then((res)=>{
          if(res.status === 200){
              dispatch({
                  type : DELETE_TASK,
                  payload:res.data
              })
          }})
      .catch(err => console.log(err.response))
  }
  }    