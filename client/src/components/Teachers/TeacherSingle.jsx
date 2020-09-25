import React, {Component} from 'react';
import {Link,Redirect} from 'react-router-dom';

const TeacherSingle=(props)=>{
    return(
        <h1>{props.teacher.major}</h1>
    )
}

export default TeacherSingle;
