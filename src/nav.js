import './App.css'
import {Link} from'react-router-dom'
export default function NavBar(){
    
    return (
        <div className='nav'>
            <ul className='nav-link'>
                <Link to='/todo'>
                    <li>Todo</li>
                </Link>
                <Link to='/about'>
                    <li>About</li>
                </Link>
            </ul>
        </div>
    )
}