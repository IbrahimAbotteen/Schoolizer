import React, {Component} from 'react';
import {Link,Redirect} from 'react-router-dom'
import TeacherForm from './TeacherForm';
import TeacherList from './TeacherList'
import TeacherSingle from './TeacherSingle';

class TeacherController extends Component{
    constructor(props){
        super(props);
        this.state={
            currentPage:props.currentPage,
            currentId:props.currentId ||null,
            dataLoaded:false,
            allTeachers:null,
            currentTeacher:null,
            fireRedirect: false,
            redirectPath: null,
        }
        this.teacherSubmit = this.teacherSubmit.bind(this);
    }

    componentDidMount(){
        if(this.state.currentPage==='index'){
            fetch('/teacher')
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    allTeachers:res.data.teachers,
                    dataLoaded: true,
                })
            }).catch(err => console.log(err));
        }
        else if(this.state.currentPage==='show'){
            fetch(`/teacher/${this.state.currentId}`)
            .then(res=>res.json())
            .then(res=>{
                console.log(res);
                this.setState({
                    currentTeacher:res.data.teacher,
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

    teacherSubmit(event,data){
        event.preventDefault();
        fetch(`/teacher`,{
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(data),
        }).then(res=>res.json())
          .then(res=>{
              this.setState({
                  fireRedirect:true,
                  redirectPath:`/teachers/${res.data.teacher.id}`
              })
          })
    }

    decideWhichToRender(){
        switch(this.state.currentPage){
            case 'index':
                return <TeacherList allTeachers={this.state.allTeachers}/>
                break;
            case 'show':
                return <TeacherSingle teacher={this.state.currentTeacher}/>
                break;
            case 'new':
                return <TeacherForm teacherSubmit={this.teacherSubmit}/>
                break;
            default:
                return <Redirect push to='/' />
                break;
        }
    }

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
export default TeacherController;