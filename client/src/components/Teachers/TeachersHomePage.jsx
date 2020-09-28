import React from 'react';
import {Link} from 'react-router-dom'

const TeachersHomePage=()=>{
    return (
        <div className='home'>            
            <h1>Teacher Management</h1>
            <h3>What would you like to do??</h3>
            <h2 className='click0'><Link to='/teachers'>Show Teachers</Link></h2>
            <h2 className='click0'><Link to='/newTeacher'>Add a Teacher</Link></h2>
            <h2 className='click0'><Link to='/teachers'>Edit a Teacher</Link></h2>
            {/* <h2 className='click1'><Link to='/teachers'>Delete a Teacher</Link></h2> */}
            
        </div>
    )
}

export default TeachersHomePage;