

const reducer = (state=[],action)=>{
    switch(action.type){
        case 'todo/added':
            return[
                ...state,
                action.payload
            ]
        case 'todo/deleted':
            return state.filter(item=>String(item.id)!==action.payload)
        case 'todo/selected':
            return state.map(item=>{
                if(String(item.id)==action.payload){
                    item.selected=true;
                    return item;
                }
                else{
                    return item;
                }
            })
        case 'todo/unselected':
            return state.map(item=>{
                
                if(String(item.id)==action.payload){
                    item.selected=false;
                    return item;
                }
                else{
                    return item;
                }
            })
        case 'todo/deleteSelected':
            //console.log(state.filter(item=>item.selected==false))
            return state.filter(item=>item.selected==false)
           
        default:
            return state;
            
    }
}
export default reducer;