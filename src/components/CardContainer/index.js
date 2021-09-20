import React,{useEffect} from 'react'
import Card from "../../components/Card"
import TaskCard from '../TaskCard'
import  * as Actions  from './../../actions';
import {useDispatch, useSelector} from "react-redux"


export default function CardContainer() {
  const dispatch = useDispatch()
  const task = useSelector(state =>state.task.tasks)
  useEffect(()=>{
    dispatch(Actions.getTask())
  },[dispatch])
  return (
    <div className="cardContainer">
        <Card title="To Do">
        { 
            task?.filter((item,index)=> item.status === "To Do")
            ?.map((item,index)=><TaskCard key={item._id}  data={item}/>)
          }
        </Card >
        <Card title="In Progress">
          { 
            task?.filter((item,index)=> item.status === "In Progress")
            ?.map((item,index)=><TaskCard key={item._id}  data={item}/>)
          }
        </Card>
        <Card title="Done">
        { 
            task?.filter((item,index)=> item.status === "Done")
            ?.map((item,index)=><TaskCard key={item._id}  data={item}/>)
          }
        </Card>
    </div>
  )
}
