import React from 'react';
import {Link} from 'react-router-dom'

const Home=()=>{
    return (
        <div className='home'>
            <h1>What would you like to do??</h1>
            <h1 className='homeButtons'><Link to='/teachersHomePage'>Teachers Management</Link></h1>
            <h1 className='homeButtons'><Link to='/studentsHomePage'>Students Management</Link></h1>
            <h1 className='homeButtons'><Link to='/studentsHomePage'>Courses Management</Link></h1>
            

        </div>
    )
}

export default Home;