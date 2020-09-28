import React, {Component} from 'react';
import {Link,Redirect} from 'react-router-dom';

const StudentSingle=(props)=>{

    return(
        <div className='studentInfoContainer'>
            <div className='studentDescription'>
                <h1>Student First Name: {props.student.first_name} </h1>
                <h1>Student's Last Name: {props.student.last_name}</h1>
                <h1>Grade Level: {props.student.grade_level}</h1>
            </div>

            <h2 className='click1'><Link to={`/editStudent/${props.student.id}`}>Edit Student</Link></h2>
            <h2 className='click2'><Link to={`/students`}>Back</Link></h2>

        </div>

        
    )

}

export default StudentSingle;