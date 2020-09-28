import React, {Component} from 'react';
import {Link,Redirect} from 'react-router-dom';

const CourseSingle=(props)=>{
    return(
        <div className='teacherInfoContainer'>
            <h2>Course Name: {props.course.course_name} </h2>
            <h2>Description: {props.course.description}</h2>
            <h2 className='click1'><Link to={`/editCourse/${props.course.id}`}>Edit Course</Link></h2>
            <h2 className='click2'><Link to={`/courses`}>Back</Link></h2>
        </div>

        
    )
}

export default CourseSingle;