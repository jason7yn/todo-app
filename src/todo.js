import AddTodo from "./components/TodoCreator"
import ListTodo from "./components/TodoList"
import './App.css'
export default function Todo(){
    
    return(
        <div className='todo-page'>
           <AddTodo className='add-todo'/>
           <ListTodo className='show-todo'/>
        </div>
    )
}