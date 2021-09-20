import React from "react";
import { deleteTodo,selectTodo,unselectTodo } from "../actions"
import store from "../store";
import { Link,useHistory } from "react-router-dom";
import '../App.css'


export default function TodoItem(props){
    const deleteItem = (e)=>{
        //console.log(e.target.parentNode);
        
        let itemId = e.target.parentNode.id
        const checkbox = document.getElementById('ck'+itemId);
        if (checkbox.checked){
            store.dispatch(deleteTodo(itemId));
        }
    }
    
    
    const isChecked = (e)=>{
        
        let itemId = e.target.parentNode.parentNode.id;
        if(e.target.checked){
            
            store.dispatch(selectTodo(itemId));
        }
        else{
            store.dispatch(unselectTodo(itemId));
        }
        
    }
    
    return(
        <tr id={props.id} onChange={isChecked} className='todo-item'>
            <td ><input type='checkbox' id={'ck'+props.id}/></td>
            <Link to={{
                pathname:`/todo/${props.id}`,
                state:props
            }}><td>{props.text.description}</td></Link>
            <td>{props.text.category}</td>
            <td className='delete-button'onClick={deleteItem}>Delete</td>
        </tr>
    ) 
}