import React from 'react';
import{Link} from 'react-router-dom';

const Teacher=(props)=>{
    return(
    <div className='teachersList'>
    <div className='teacherName'>
        <h2> Teacher's Name: {props.teacher.first_name}</h2>   
        <h2 className='click1'><Link to={`/teachers/${props.teacher.id}`}>More Info</Link></h2>
        <h2 className='click2'><Link to={`/editTeacher/${props.teacher.id}`}>Edit this teacher</Link></h2>
        {/*<h2 className='click1'><Link to={`/teachers/${props.teacher.id}`}>Delete this teacher</Link></h2> */}
    </div>
    
   </div>

    )
}

export default Teacher;