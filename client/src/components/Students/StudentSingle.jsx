import React, {Component} from 'react';
import {Link,Redirect} from 'react-router-dom';

const StudentSingle=(props)=>{

    return(
        <div className='teacherInfoContainer'>
            <h2>Student First Name: {props.student.first_name} </h2>
            <h2>Student's Last Name: {props.student.last_name}</h2>
            <h2>Grade Level: {props.student.grade_level}</h2>
            <h2 className='click1'><Link to={`/editStudent/${props.student.id}`}>Edit Student</Link></h2>
            <h2 className='click2'><Link to={`/students`}>Back</Link></h2>

        </div>

        
    )

}

export default StudentSingle;