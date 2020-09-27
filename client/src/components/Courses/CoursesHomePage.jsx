import React from 'react';
import {Link} from 'react-router-dom'

const CoursesHomePage=()=>{
    return (
        <div className='home'>            
            <h2>Courses Management</h2>
            <h2>  </h2>
            <h1>What would you like to do??</h1>
            <h2 className='click1'><Link to='/courses'>Show Courses</Link></h2>
            <h2 className='click1'><Link to='/newCourse'>Add New Course</Link></h2>
            <h2 className='click1'><Link to='/courses'>Edit a Course</Link></h2>
            {/* <h2 className='click1'><Link to='/teachers'>Delete a Teacher</Link></h2> */}
            
        </div>
    )
}

export default CoursesHomePage;