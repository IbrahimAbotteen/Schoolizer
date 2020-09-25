import React from 'react'
import  {Link} from 'react-router-dom'

const Header=()=>{
    return(
        <header>
            <nav>
                <ul className='navBar'>
                    <h4><Link to='/'>Home</Link></h4>
                </ul>
            </nav>
        </header>
    )
}
export default Header;