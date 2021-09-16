import store from "../store";
import { addTodo } from "../actions";
export default function AddTodo(){
    let id = 0;
    function handleSubmit(e){
        e.preventDefault();
        //let input = [];
        let item = {};
        item['id']=id++;
        //console.log(e.target)
        for(let ele of e.target){
            item[ele.name]=ele.value;
        }
        
        store.dispatch(addTodo(item));
        
        
    }
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Description: </label>
                <input type='text' name='description'/>
            </div>
            <div>
                <label>Category: </label>
                <select name='category'>
                    <option value='html'>html</option>
                    <option value='css'>css</option>
                    <option value='js'>js</option>
                </select>
            </div>
            <div>
                <label>Content: </label>
                <textarea name='textarea'></textarea>
            </div>
            <input type='submit'value='submit'/>
        </form>

    );
    
}