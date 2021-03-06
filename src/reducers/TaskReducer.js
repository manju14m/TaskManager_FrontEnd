import {GET_TASK, ADD_TASK} from '../actions/Types'

const initialState={
  tasks :[], 
}


export default function taskReducer(state = initialState,action){
  switch(action.type){
      case GET_TASK :
          return {tasks:[...action.payload]}

      case ADD_TASK:
          return{tasks:[...state.task.tasks, action.payload]}
          
      default:
      return state
    } 
  }         