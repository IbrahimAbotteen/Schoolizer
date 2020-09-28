import React from 'react';
import {Link} from 'react-router-dom'

const CoursesHomePage=()=>{
    return (
        <div className='home'>            
            <h1>Courses Management</h1>
            <h3>What would you like to do??</h3>
            <h2 className='click0'><Link to='/courses'>Show Courses</Link></h2>
            <h2 className='click0'><Link to='/newCourse'>Add a Course</Link></h2>
            <h2 className='click0'><Link to='/courses'>Edit a Course</Link></h2>       
        </div>
    )
}

export default CoursesHomePage;