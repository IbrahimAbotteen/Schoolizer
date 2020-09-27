import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import TeacherController from './components/Teachers/TeacherController'
import TeachersHomePage from './components/Teachers/TeachersHomePage'
import StudentController from './components/Students/StudentsHomePage'
import StudentsHomePage from './components/Students/StudentsHomePage'

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



            </div>
          </Router>

       
       

  );
  }

}

export default App;
