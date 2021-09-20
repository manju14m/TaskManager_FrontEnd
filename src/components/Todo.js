import React from 'react'
import '../App.css';

export default function Todo({todo,setTodo}){

    const deleteHandler  = (e) =>{
        e.target.parentElement.remove();
    }    
    return(
        <div>
        {
        todo.map((txt)=>(
            <div className="todo" key={txt.id}>{txt.data}
            <i className="fa fa-trash" onClick={deleteHandler}></i>
            </div>
        ))
    }
       </div> 
    );
}