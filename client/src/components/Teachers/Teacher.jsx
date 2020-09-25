import React from 'react';
import{Link} from 'react-router-dom';

const Teacher=(props)=>{
    return(
        <div className='teachersList'>
            <div className='teacherName'>
                <h2> Teacher's Name: {props.teacher.first_name}</h2>
            </div>
            
        </div>
    )
}

export default Teacher;