import React, {Component} from 'react';
import {Link,Redirect} from 'react-router-dom'
import Student from './Student'

const StudentList=(props)=>{
    return(
        <div>
            {props.allStudents.map(student=>{
                
                return <Student key={student.id} student={student} />
            })}
        </div>
    )
}

export default StudentList;