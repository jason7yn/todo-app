import store from "../store"
import { useSelector } from "react-redux"
export default function ListTodo(props){
    const selectTodo = state=>state;
    const todos = useSelector(selectTodo);
    // const displayTodo = ()=>{
        
    //     todos.foreach(item=>{

    //     }
    //     return(
    //         <tr>
    //             <td><input type='checkbox'/></td>
    //             <td>{item.description}</td>
    //             <td>{item.category}</td>
    //             <td>Delete</td>
    //         </tr>
        
    //     );
    //}
    return(
        <div>
            <button>Delete selected</button>
            <div className='showTodo'>
                <table>
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                
            
                
                    
                </table>
            </div>
        </div>
    )
}