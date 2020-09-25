import React from 'react';
import {Link} from 'react-router-dom'

const Home=()=>{
    return (
        <div className='home'>
            <h1>What would you like to do??</h1>
            <h2>Teacher's Management</h2>
            <button className='mainPageButtons'><h2><Link to='/teachers'>Teacher's Management</Link></h2></button>
            

        </div>
    )
}

export default Home;