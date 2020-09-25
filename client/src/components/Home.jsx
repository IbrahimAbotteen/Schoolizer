import React from 'react';
import {Link} from 'react-router-dom'

const Home=()=>{
    return (
        <div className='home'>
            <h1>What would you like to do??</h1>
            <h2>Teacher's Management</h2>
            <Link to='/teachers'>teachers</Link>

        </div>
    )
}

export default Home;