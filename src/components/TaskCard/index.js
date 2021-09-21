import React,{useState, useEffect} from 'react'
import { MdDelete } from 'react-icons/md';
import { BiTimeFive } from 'react-icons/bi';
import moment from "moment"
import EditTask from "../../components/EditTask"
import Modal from "../../components/Modal"
import  * as Actions  from './../../actions';
import {useDispatch, useSelector} from "react-redux"




export default function TaskCard({data}) {
  const [show, setShow] = useState(false) 
  const [task, setTask] = useState() 
  const dispatch = useDispatch()
  const tasks = useSelector(state =>state.task.tasks)



  const duration = (date) =>{
    
    const expire =  moment(date, "YYYYMMDD").fromNow();
    if(expire.includes("ago")){
      return `Task Expired ${expire}`
    }
    else{
      return `Task Expires ${expire}`
    }
  }
  
  const getById = (id) =>{
    setShow(true);
    const filteredTask = tasks.filter((item)=> item._id === id )
    setTask(...filteredTask)
  }

  const deleteTask = (id) =>{
    const taskById = dispatch(Actions.deleteTask(id,refreshTask))
    setTask(taskById)
  }

  const refreshTask =()=>{
    dispatch(Actions.getTask())
  }
  
  return (
    <>
    <div className="taskCard">
      <div className="title">
        <p onClick={() =>  {getById(data._id)}}>{data?.title}</p>
        <MdDelete className="delete" onClick={()=>{deleteTask(data._id)}}/>
      </div>
      <div className="description">
        <p>
          {data?.description}
        </p>
      </div>
      <div className="duration">
        <p>
          <BiTimeFive/>
           {duration(data?.targetDate)}
        </p>
        <p>
          {`Target Date: ${moment(data?.targetDate).format("L")}`}
        </p>
      </div>
    </div>
      {
        show && <Modal><EditTask show={show} id={data._id} task ={task} setTask={setTask} setShow={setShow}/></Modal>
      }
    
    </>
  )
}
