import {GET_TASK, ADD_TASK, UPDATE_TASK, DELETE_TASK} from './Types'
import get from "../utils/api/get"
import post from "../utils/api/post"
import update from "../utils/api/update"
import getById from "../utils/api/getById"
import deleteTaskById from "../utils/api/deleteTaskById"


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

export const getTaskById =(id) => {  
return async (dispatch) => {
   await getById(id)
    .then((res)=>{
        if(res.status === 200){
            return res.data
        }})
    .catch(err => console.log(err.response))
}
}

export const addTask = (body,refreshTask) => {  
return async (dispatch) => {
    await post(body)
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
  return async (dispatch) => {
      await update(id,body)
      .then((res)=>{
          if(res.status === 200){
            refreshTask()
          }})
      .catch(err => console.log(err.response))
  }
  }

export const deleteTask = (id,refreshTask) => {  
  return async (dispatch) => {
    await deleteTaskById(id)
      .then((res)=>{
          if(res.status === 200){
            refreshTask()
          }})
      .catch(err => console.log(err.response))
  }
  }    