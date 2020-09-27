import React, {Component} from 'react';
import {Link,Redirect} from 'react-router-dom';
import StudentForm from './StudentForm';
import StudentList from './StudentList'
import StudentSingle from './StudentSingle';

class StudentController extends Component{
    constructor(props){
        super(props);
        this.state={
            currentPage:props.currentPage,
            currentId:props.currentId ||null,
            dataLoaded:false,
            allStudents:null,
            currentStudent:null,
            fireRedirect: false,
            redirectPath: null,
        }
        this.studentSubmit = this.studentSubmit.bind(this);
    }

    componentDidMount(){
        if(this.state.currentPage==='index'){
            fetch('/student')
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    allStudents:res.data.studnets,
                    dataLoaded: true,
                })
            }).catch(err => console.log(err));
        }
    }

    decideWhichToRender(){
        switch(this.state.currentPage){
            case 'index':
                return <StudentList allStudents={this.state.allStudents}/>
                break;
        }

    }
}

export default StudentController;