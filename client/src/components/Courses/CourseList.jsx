import React, {Component} from 'react';
import {Link,Redirect} from 'react-router-dom'
import Course from './Course'


const CourseList=(props)=>{
    return(
        <div>
            {props.allCourses.map(course=>{
                return <Course key={course.id} course={course} />
            })}
        </div>
    )
}

export default CourseList;