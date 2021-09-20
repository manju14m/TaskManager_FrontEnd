import React,{useState} from 'react'
import Button from "../Button"
import { GrClose } from 'react-icons/gr';
import  * as Actions  from '../../actions';
import {useDispatch,} from "react-redux"
import * as URL from "../../constants"



export default function EditTask({show,setShow}) {
const [task, setTask] = useState({})

const dispatch = useDispatch()

const handleTask = (e)=>{
  setTask({...task,[e.target.name]:e.target.value})
}


const handleSubmit =(e) =>{
  e.preventDefault()
  dispatch(Actions.addTask(task))
  console.log("task added")
  dispatch(Actions.getTask(URL.TaskUrl))
  setTask({});
  setShow(!show)
}

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
        <input type="text" id="title" name="title" onChange={handleTask} placeholder="Enter Title" required/>
        <label htmlFor="description">Description:</label>
        <input type="text" id="description" name="description" onChange={handleTask} placeholder="Enter Description" required />
        <label htmlFor="date">Target Date:</label>
        <input type="date" id="date" name="date" onChange={handleTask} placeholder="Enter Target Date" required/>
        <label htmlFor="status">Status:</label>
        <select type="dropdown" id="date" name="date" onChange={handleTask} placeholder="Enter Target Date" required>
          <option>To Do</option>
          <option>In Progress</option>
          <option> Done</option>
        </select>
        <Button title="submit" onClick={handleSubmit}/>
      </div>  
    </div>
  )
}
