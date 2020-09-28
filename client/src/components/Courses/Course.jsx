import React from 'react';
import{Link} from 'react-router-dom';

const Course=(props)=>{
    return(
    <div className='teachersList'>
    <div className='teacherName'>
        <h2> Course Name: {props.course.course_name}</h2>   
        <h2 className='click1'><Link to={`/courses/${props.course.id}`}>More Info</Link></h2>
        <h2 className='click2'><Link to={`/editCourse/${props.course.id}`}>Edit this course</Link></h2>
    </div>
    
   </div>

    )
}

export default Course;