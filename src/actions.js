const addTodo = (item)=>({
    type:'todo/added',
    payload:item
})
const deleteTodo = (itemId)=>({
    type:'todo/deleted',
    payload:itemId
})
const selectTodo=(itemId)=>({
    type:'todo/selected',
    payload:itemId
});
const unselectTodo=(itemId)=>({
    type:'todo/unselected',
    payload:itemId
});
const deleteSelectedTodos=()=>({
    type:'todo/deleteSelected'
})

export {addTodo,deleteTodo,selectTodo,unselectTodo,deleteSelectedTodos};