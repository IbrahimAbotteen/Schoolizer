import React from 'react';
import {Link} from 'react-router-dom'

const StudentsHomePage=()=>{
    return (
        <div className='home'>
            <h1>Students Management</h1>
            <h3>What would you like to do??</h3>
            <h2 className='click0'><Link to='/students'>Show Students</Link></h2>
            <h2 className='click0'><Link to='/newStudent'>Add a Student</Link></h2>
            <h2 className='click0'><Link to='/students'>Edit a Student</Link></h2>
        </div>
    )
}


export default StudentsHomePage;