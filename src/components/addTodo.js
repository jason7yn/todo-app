export default function AddTodo(){
    return(
        <form>
            <div>
                <label>Description: </label>
                <input type='text'/>
            </div>
            <div>
                <label>Category: </label>
                <select>
                    <option value='html'>html</option>
                    <option value='css'>css</option>
                    <option value='js'>js</option>
                </select>
            </div>
            <div>
                <label>Content: </label>
                <textarea></textarea>
            </div>
            <input type='submit'value='submit'/>
    </form>

    );
    
}