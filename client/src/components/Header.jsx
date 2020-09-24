import React from 'react'
import  {Link} from 'react-router-dom'

const Header=()=>{
    return(
        <header>
            <nav>
                <ul className='navBar'>
                    <li><Link to='/'>Home</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;