import React from 'react';
import {Link} from 'react-router-dom'

const Home=()=>{
    return (
        <div className='home'>
            <h1>What would you like to do??</h1>
            <h2>     </h2>
            <h2 className='click1'><Link to='/teachersHomePage'>Teacher's Management</Link></h2>
            <h2 className='click1'><Link to='/studentsHomePage'>Student's Management</Link></h2>
            

        </div>
    )
}

export default Home;