import React, {Component} from 'react';
import {Link,Redirect} from 'react-router-dom';
import TeacherForm from './TeacherForm';
import TeacherList from './TeacherList';
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
        else if(this.state.currentPage==='show' || this.state.currentPage==='edit'){
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

    teacherSubmit(method,event,data,id){
        event.preventDefault();
        fetch(`/teacher/${id ||''}`,{
            method: method,
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

    teacherDelete(id){
        fetch(`/teacher/${id}`,{
            method: 'DELETE',
        }).then(res => res.json())
        .then(res => {
          console.log(res);
          this.setState({
            fireRedirect: true,
            redirectPath: '/teachers',
          });
        }).catch(err => console.log(err));
    }

    decideWhichToRender(){
        switch(this.state.currentPage){
            case 'index':
                return <TeacherList allTeachers={this.state.allTeachers}/>
                break;
            case 'show':
                return <TeacherSingle teacher={this.state.currentTeacher} teacherDelete={this.teacherDelete}/>
                break;
            case 'new':
                return <TeacherForm isAdd={true} teacherSubmit={this.teacherSubmit}/>
                break;
            case 'edit':
                return<TeacherForm isAdd={false} teacherSubmit={this.teacherSubmit} teacher={this.state.currentTeacher}/>
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