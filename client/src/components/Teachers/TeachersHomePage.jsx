import React from 'react';
import {Link} from 'react-router-dom'

const TeachersHomePage=()=>{
    return (
        <div className='home'>            
            <h2>Teacher Management</h2>
            <h2>  </h2>
            <h1>What would you like to do??</h1>
            <h2 className='click1'><Link to='/teachers'>Show Teachers</Link></h2>
            <h2 className='click1'><Link to='/newTeacher'>Add New Teacher</Link></h2>
            <h2 className='click1'><Link to='/teachers'>Edit a Teacher</Link></h2>
            {/* <h2 className='click1'><Link to='/teachers'>Delete a Teacher</Link></h2> */}
            
        </div>
    )
}

export default TeachersHomePage;