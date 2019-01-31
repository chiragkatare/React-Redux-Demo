
import React, { Component } from 'react';
import { Switch,BrowserRouter as  Router, Route } from 'react-router-dom';
// import {connect } from "react-redux";

// import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import DashBoard from './components/DashBoard';




class App extends Component {
  render() {
    return (
      
        <Router>
            <Switch>
          <Route path='/' exact component={Login}></Route>
        
          <Route path='/forgetpassword' component={ForgotPassword}></Route>
          <Route path='/dashboard' component={DashBoard}></Route>
          </Switch>
        </Router>
        
    );
  }
}



export default App;

// export default App;

