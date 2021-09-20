import {Link}from'react-router-dom'
export default function ItemDetail(props){
    //console.log(props)
    const itemDetail = props.location.state.text;
    //console.log(itemDetail);
    const displayDetail = ()=>{
        const keys = Object.keys(itemDetail);
        return keys.map(k=>(<li><strong>{`${k}: `}</strong>{itemDetail[k]}</li>))
    }
    return(
       
        <div>
            <ul style={{listStyleType:'none'}}>
                {displayDetail()}
            </ul>
            <Link to='/todo'><button>Back</button></Link>
        </div>
       
        
    )
}