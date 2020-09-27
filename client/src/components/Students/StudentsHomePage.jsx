import React from 'react';
import {Link} from 'react-router-dom'

const StudentsHomePage=()=>{
    return (
        <div className='home'>
            <h2>Students Management</h2>
            <h2>   </h2>
            <h1>What would you like to do??</h1>
            <h2 className='click1'><Link to='/students'>Show Students</Link></h2>
            <h2 className='click1'><Link to='/newStudent'>Add New Student</Link></h2>
            <h2 className='click1'><Link to='/students'>Edit a Student</Link></h2>
        </div>
    )
}


export default StudentsHomePage;