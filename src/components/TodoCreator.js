import store from "../store";
import { addTodo } from "../actions";
export default function AddTodo(){
    let id = 1;
    function handleSubmit(e){
        e.preventDefault();
        let item = {};
        let text={}
        for(let ele of e.target){
            if(ele.name!==''){
                text = {
                    ...text,
                    [ele.name]:ele.value
                }
            }    
        }
        item['id']=id++;
        
        item['text']=text;
        item['selected']=false;
        store.dispatch(addTodo(item));
        
        
        
    }
    return(
        <form onSubmit={handleSubmit} className='add-todo'>
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