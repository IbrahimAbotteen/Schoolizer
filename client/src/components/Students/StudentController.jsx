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
        this.studentDelete = this.studentDelete.bind(this);
    }

    componentDidMount(){
        if(this.state.currentPage==='index'){
            fetch('/student')
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    allStudents:res.data.students,
                    dataLoaded: true,
                })
            }).catch(err => console.log(err));
        }
        else if (this.state.currentPage==='show' || this.state.currentPage==='edit'){
            fetch(`/student/${this.state.currentId}`)
            .then(res=>res.json())
            .then(res=>{
                console.log(res);
                this.setState({
                    currentStudent:res.data.student,
                    dataLoaded:true,
                })
            }).catch(err => console.log(err));
        }
        else if(this.state.currentPage==='new'){
            this.setState({
                dataLoaded:true,
            })
        }
    }

    studentSubmit(method,event,data,id){
        event.preventDefault();
        fetch(`/student/${id ||''}`,{
            method: method,
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(data),
        }).then(res=>res.json())
          .then(res=>{
              this.setState({
                  fireRedirect:true,
                  redirectPath:`/students/${res.data.student.id}`
              })
          })
    }

    studentDelete(id){
        fetch(`/student/${id}`,{
            method: 'DELETE',
        }).then(res => res.json())
        .then(res => {
          console.log(res);
          this.setState({
            fireRedirect: true,
            redirectPath: '/students',
          });
        }).catch(err => console.log(err));
    }

    decideWhichToRender(){
        switch(this.state.currentPage){
            case 'index':
                return <StudentList allStudents={this.state.allStudents}/>
                break;
            case 'show':
                return <StudentSingle student={this.state.currentStudent} studentDelete={this.studentDelete}/>
                break;
            case 'new':
                return <StudentForm isAdd={true} studentSubmit={this.studentSubmit}/>
                break;
                break;
            case 'edit':
                return<StudentForm isAdd={false} studentSubmit={this.studentSubmit} student={this.state.currentStudent}/>
                break;

            default: 
                return <Redirect push to='/' />
                break;
        }}

        render(){
            return(
            <div>
                {
                    (this.state.dataLoaded)
                    ? this.decideWhichToRender()
                    :<p>loading......</p>
                }

               {
                    this.state.fireRedirect && <Redirect push to={this.state.redirectPath} />
               }
            </div>
    
    
            )
        }
    }


export default StudentController;