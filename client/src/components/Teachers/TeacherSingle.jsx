import React, {Component} from 'react';
import {Link,Redirect} from 'react-router-dom';

const TeacherSingle=(props)=>{
    return(
        <div className='teacherInfoContainer'>
            <h2>Teachers First Name: {props.teacher.first_name} </h2>
            <h2>Teacher's Last Name: {props.teacher.last_name}</h2>
            <h2>Major: {props.teacher.major}</h2>
            <h2 className='click1'><Link to={`/editTeacher/${props.teacher.id}`}>Edit Teacher</Link></h2>
            <h2 className='click2'><Link to={`/teachers`}>Back</Link></h2>
            {/* <button className="click1" onClick={() => props.teacherDelete(props.teacher.id)}>Delete</button> */}
            {/* <button className='mainPageButtons'><h2><Link to={`/editTeacher/${props.teacher.id}`}>Edit Teacher</Link></h2></button> */}
        </div>

        
    )
}

export default TeacherSingle;
