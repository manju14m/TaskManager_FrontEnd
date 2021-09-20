import React,{useState} from 'react'
import { MdDelete } from 'react-icons/md';
import { BiTimeFive } from 'react-icons/bi';
import moment from "moment"
import EditTask from "../../components/EditTask"
import Modal from "../../components/Modal"



export default function TaskCard({data}) {
  const classes = []
  const [show, setShow] = useState(false) 


  const duration = (date) =>{
    
    const expire =  moment(date, "YYYYMMDD").fromNow();
    if(expire.includes("ago")){
      classes.push("expired")
      return `Task Expired ${expire}`
    }
    else{
      classes.push("expires")
      return `Task Expires ${expire}`
    }

  }
  
  console.log()
  return (
    <>
    <div className="taskCard" onClick={()=>setShow(true)}>
      <div className="title">
        <p>{data?.title}</p>
        <MdDelete className="delete" onClick={(e)=>console.log(e.nativeEvent.path[3].key)}/>
      </div>
      <div className="description">
        <p>
          {data?.description}
        </p>
      </div>
      <div className="duration">
        <p className={classes.join("")}>
          <BiTimeFive/>
           {duration(data?.targetDate)}
        </p>
        <p>
          {`Target Date: ${moment(data?.targetDate).format("L")}`}
        </p>
      </div>
    </div>
      {
        show && <Modal><EditTask show={show} setShow={setShow}/></Modal>
      }
    
    </>
  )
}
