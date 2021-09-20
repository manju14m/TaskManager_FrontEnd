import React from 'react';
import '../App.css';


export default function Form({text,setText,todo,setTodo}){

    
    const textHandler = (e) =>{
        setText(e.target.value)
        console.log(e.target.value)
    }
        
    const submitHandler = (e) =>{
        e.preventDefault();
        if(text !=="" && text !==undefined && text !==null) {
        setTodo((prev)=>[...prev,{data:text,
                id:Math.random() *1000}])
        setText("")}
    }
    

    return(
    <form onSubmit={submitHandler}>
        <input type="text" autoFocus onChange={textHandler} value={text} />
        <button className="submit">Add Items</button>
    </form>
    )
}