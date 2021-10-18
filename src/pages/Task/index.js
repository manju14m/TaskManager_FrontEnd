import CardContainer from './../../components/CardContainer';
import Header from "../../components/Header"
import Button from "../../components/Button"
import Profile from "../../components/Profile"
import TaskForm from "../../components/TaskForm"
import {useState} from "react"
import Modal from "../../components/Modal"


import React from 'react'

export default function TaskPage() {

  const [show, setShow] = useState(false) 

  return (
    <div className="taskPage">
      <Header/>
      <div className="headerBar">
        <Button onClick={()=>setShow(true)} title="Add Task" />
        <Profile/>
      </div>
      <CardContainer/>
      {
        show && <Modal onClick={()=>setShow(false)}><TaskForm show={show} setShow={setShow}/></Modal>
      }
    </div>
  )
}
