import React, {Component} from 'react';
import {Link,Redirect} from 'react-router-dom';
import CourseForm from './CourseForm';
import CourseList from './CourseList';
import CourseSingle from './CourseSingle';

class CourseController extends Component{
    constructor(props){
        super(props);
        this.state={
            currentPage:props.currentPage,
            currentId:props.currentId ||null,
            dataLoaded:false,
            allCourses:null,
            currentCourse:null,
            fireRedirect: false,
            redirectPath: null,
        }
        this.courseSubmit = this.courseSubmit.bind(this);
    }

    componentDidMount(){
        if(this.state.currentPage==='index'){
            fetch('/course')
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    allCourses:res.data.courses,
                    dataLoaded: true,
                })
            }).catch(err => console.log(err));
        }

        else if(this.state.currentPage==='show' || this.state.currentPage==='edit'){
            fetch(`/course/${this.state.currentId}`)
            .then(res=>res.json())
            .then(res=>{
                console.log(res);
                this.setState({
                    currentCourse:res.data.course,
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

    courseSubmit(method,event,data,id){
        event.preventDefault();
        fetch(`/course/${id ||''}`,{
            method: method,
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(data),
        }).then(res=>res.json())
          .then(res=>{
              this.setState({
                  fireRedirect:true,
                  redirectPath:`/courses/${res.data.course.id}`
              })
          })
    }
    decideWhichToRender(){
        switch(this.state.currentPage){
            case 'index':
                return <CourseList allCourses={this.state.allCourses}/>
                break;
            case 'show':
                return <CourseSingle course={this.state.currentCourse} />
                break;
            case 'new':
                return <CourseForm isAdd={true} courseSubmit={this.courseSubmit}/>
                break;
            case 'edit':
                return<CourseForm isAdd={false} courseSubmit={this.courseSubmit} course={this.state.currentCourse}/>
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
export default CourseController;