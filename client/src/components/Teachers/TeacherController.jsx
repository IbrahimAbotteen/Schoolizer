import React, {Component} from 'react';
import {Link,Redirect} from 'react-router-dom'

class TeacherController extends Component{
    constructor(props){
        super(props);
        this.state={
            currentPage:props.currentPage,
            dataloaded:false,
            allTeachers:null,
        }
    }

    render(){
        return(
        <h1>The current page is {this.state.currentPage}</h1>
        )
    }
}
export default TeacherController;