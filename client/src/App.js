import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import TeacherController from './components/Teachers/TeacherController'

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

            <Route exact path="/teachers"
              render={() => <TeacherController currentPage="index" />}
          />

            <Route exact path="/teachers/:id"
              render={props =>( <TeacherController currentPage="show" currentId={props.match.params.id}/>)}
            />

            <Route exact path='/newTeacher'
              render={()=>(<TeacherController currentPage='new'/>)}
            
            
            />
  

            </div>
          </Router>

       
       

  );
  }

}

export default App;
