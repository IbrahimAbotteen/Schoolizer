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
            </div>
          </Router>

       
       

  );
  }

}

export default App;
