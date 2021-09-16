const addTodo = (item)=>({
    type:'todo/added',
    payload:item
})
const deleteTodo = (item)=>({
    type:'todo/deleted',
    payload:item
})

export {addTodo,deleteTodo};