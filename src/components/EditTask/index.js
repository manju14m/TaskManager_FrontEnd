import React,{useState} from 'react'
import Button from "../Button"
import { GrClose } from 'react-icons/gr';
import  * as Actions  from '../../actions';
import {useDispatch,} from "react-redux"
import * as URL from "../../constants"



export default function EditTask({show,setShow,task,setTask, id}) {
// const [task, setTask] = useState({})

const dispatch = useDispatch()

const handleTask = (e)=>{
  setTask({...task,[e.target.name]:e.target.value})
}

const disable = !task.title || !task.description 

const handleSubmit =(e) =>{
  e.preventDefault()
  if(disable){return}
  dispatch(Actions.updateTask(id,task,refreshTask))
  setTask({});
  setShow(!show)
}

const refreshTask =()=>{
  dispatch(Actions.getTask())
}
  // console.log(id)
  return (
    <div className="editFormContainer">
      <div className="editFormClose" onClick={()=>setShow(!show)}>
          <GrClose/>
      </div>
      <div>
        <h2>Edit Your Task Here</h2>
      </div>
      <div className="editForm">
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" onChange={handleTask} value={task.title} placeholder="Enter Title" required/>
        <label htmlFor="description">Description:</label>
        <input type="text" id="description" name="description" onChange={handleTask} value={task.description}  placeholder="Enter Description" required />
        <label htmlFor="targetDate">Target Date:</label>
        <input type="date" id="targetDate" name="targetDate" onChange={handleTask} value={task.targetDate} placeholder="Enter Target Date" required/>
        <label htmlFor="status">Status:</label>
        <select type="dropdown" id="status" name="status" onChange={handleTask} value={task.status}  placeholder="Enter Target Date" required>
          <option>In Progress</option>
          <option>To Do</option>
          <option> Done</option>
        </select>
        <Button title="submit" onClick={handleSubmit}/>
      </div>  
    </div>
  )
}
