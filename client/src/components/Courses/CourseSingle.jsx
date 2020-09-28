import React, {Component} from 'react';
import {Link,Redirect} from 'react-router-dom';

const CourseSingle=(props)=>{
    return(
        <div className='courseInfoContainer'>
            <div className='courseDescription'>            
                <h1>Course Name: {props.course.course_name} </h1>
                <h1>Description: {props.course.description}</h1>
                <button className="click1" onClick={() => props.courseDelete(props.course.id)}>Delete</button>
            </div>

            <h2 className='click1'><Link to={`/editCourse/${props.course.id}`}>Edit Course</Link></h2>
            <h2 className='click2'><Link to={`/courses`}>Back</Link></h2>
        </div>

        
    )
}

export default CourseSingle;