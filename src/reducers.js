const reducer = (state=[],action)=>{
    switch(action.type){
        case 'todo/added':
            return[
                ...state,
                action.payload
            ]
        case 'todo/deleted':
            return[
                ...state,
            ]
        default:
            return state;
            
    }
}
export default reducer;