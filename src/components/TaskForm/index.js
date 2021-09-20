import React,{useState} from 'react'
import Button from "../../components/Button"
import { GrClose } from 'react-icons/gr';
import  * as Actions  from './../../actions';
import {useDispatch} from "react-redux"



export default function TaskForm({show,setShow}) {
const [task, setTask] = useState({})

const dispatch = useDispatch()

const handleTask = (e)=>{
  setTask({...task,[e.target.name]:e.target.value})
}


const handleSubmit =(e) =>{
  e.preventDefault()
  dispatch(Actions.addTask(task))
  setTask({});
  setShow(!show)
}

  return (
    <div className="TaskFormContainer">
      <div className="close" onClick={()=>setShow(!show)}>
          <GrClose/>
      </div>
      <div>
        <h2>Add Your Task Here</h2>
      </div>
      <div className="form">
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" onChange={handleTask} value={task.title} placeholder="Enter Title" required/>
        <label htmlFor="description">Description:</label>
        <input type="text" id="description" name="description" onChange={handleTask} value={task.description} placeholder="Enter Description" required />
        <label htmlFor="targetDate">Target Date:</label>
        <input type="date" id="targetDate" name="targetDate" onChange={handleTask} value={task.date} placeholder="Enter Target Date" required/>
        <Button title="submit" onClick={handleSubmit}/>
      </div>  
    </div>
  )
}
