import React from 'react';
import{Link} from 'react-router-dom';

const Student=(props)=>{
    return(
    <div className='teachersList'>
    <div className='teacherName'>
        {console.log(props.student.first_name)}
        <h2> Student's Name: {props.student.first_name}</h2>   
        <h2 className='click1'><Link to={`/students/${props.student.id}`}>More Info</Link></h2>
        <h2 className='click2'><Link to={`/editStudent/${props.student.id}`}>Edit this student</Link></h2>
    </div>
    
   </div>

    )
}

export default Student;