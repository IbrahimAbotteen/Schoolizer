import React from 'react';
import{Link} from 'react-router-dom';

const Teacher=(props)=>{
    return(
        <div>
            <h2>{props.teacher.first_name}</h2>
        </div>
    )
}

export default Teacher;