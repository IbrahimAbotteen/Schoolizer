import React, {Component} from 'react';
import {Link,Redirect} from 'react-router-dom'
import Teacher from './Teacher'


const TeacherList=(props)=>{
    return(
        <div>
            {props.allTeachers.map(teacher=>{
                return <Teacher key={teacher.id} teacher={teacher} />
            })}
        </div>
    )
}

export default TeacherList;