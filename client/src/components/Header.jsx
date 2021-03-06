import React from 'react'
import  {Link} from 'react-router-dom'

const Header=(props)=>{
    return(
        <header>
            <nav>
                <h4><Link to='/'>Home</Link></h4>
                <h4><Link to='/teachersHomePage'>Teachers</Link></h4>
                <h4><Link to='/studentsHomePage'>Students</Link></h4>
                <h4><Link to='/coursesHomePage'>Courses</Link></h4>
            </nav>
        </header>
    )
}
export default Header;