import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';

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
            </div>
          </Router>

       
       

  );
  }

}

export default App;
