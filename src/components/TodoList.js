import store from "../store"
import { useSelector } from "react-redux"
import { deleteSelectedTodos } from "../actions"
import TodoItem from "./TodoItem";
import '../App.css';
export default function ListTodo(props){
    const selectTodos = state=>state;
    
    const todos = useSelector(selectTodos)
    const renderedTodoItems = todos.map(item=>
        <TodoItem id={item.id} text={item.text}/>
    ) 
    const deleteTods = ()=>{
        store.dispatch(deleteSelectedTodos());
    }
    return(
        <div className='show-todo'>
            <button onClick={deleteTods}>Delete selected</button>
            <div className='showTodo'>
                <table cellSpacing='0'>
                    <tr className='table-head'>
                        <th><input type='checkbox'/></th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Operate</th>
                    
                    </tr>
                    {renderedTodoItems}        
                </table>
            </div>
        </div>
    )
}