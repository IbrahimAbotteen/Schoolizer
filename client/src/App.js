import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Redirect} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';

import TeacherController from './components/Teachers/TeacherController';
import TeachersHomePage from './components/Teachers/TeachersHomePage';

import StudentController from './components/Students/StudentController';
import StudentsHomePage from './components/Students/StudentsHomePage';

import CourseController from './components/Courses/CourseController';
import CoursesHomePage from './components/Courses/CoursesHomePage';

 class App extends Component {
   constructor(){
     super();
     this.state={
       auth:false,
       user:null,
     }
    }

  render(){
      return (
        
          <Router>
            <div>
            <Header/>
              <Route exact path='/' component={Home}/>

              <Route exact path='/teachersHomePage' component={TeachersHomePage} />

              <Route exact path="/teachers"
                render={() => <TeacherController currentPage="index" />}
          />  

              <Route exact path="/teachers/:id"
                render={props =>( <TeacherController currentPage="show" currentId={props.match.params.id}/>)}
              />

              <Route exact path='/newTeacher'
                render={()=>(<TeacherController currentPage='new'/>)}            
              />

              <Route exact path="/editTeacher/:id"
                render={props => (<TeacherController
                  currentPage="edit" currentId={props.match.params.id} />)}
              />

              <Route exact path='/studentsHomePage' component={StudentsHomePage} />

              <Route exact path="/students"
                render={() => <StudentController currentPage="index" />}
              />

              <Route exact path="/students/:id"
                render={props =>( <StudentController currentPage="show" currentId={props.match.params.id}/>)}
              />

              <Route exact path='/newStudent'
                render={()=>(<StudentController currentPage='new'/>)}            
              />

              <Route exact path="/editStudent/:id"
                render={props => (<StudentController
                  currentPage="edit" currentId={props.match.params.id} />)}
              />

              <Route exact path='/coursesHomePage' component={CoursesHomePage} />

              <Route exact path="/courses"
                render={() => <CourseController currentPage="index" />}
              />

              <Route exact path="/courses/:id"
                render={props =>( <CourseController currentPage="show" currentId={props.match.params.id}/>)}
              />

              <Route exact path='/newCourse'
                render={()=>(<CourseController currentPage='new'/>)}            
              />

              <Route exact path="/editCourse/:id"
                render={props => (<CourseController
                  currentPage="edit" currentId={props.match.params.id} />)}
                />
            </div>
          </Router>       
  );
  }

}

export default App;
