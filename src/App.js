import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Homepage from './Homepage/Homepage';
import Menu from './Menu/Menu';
import Dashboard from './Dashboard/Dashboard';
import Login from './Login/Login';
import Logout from './Logout/Logout';
import Signup from './Signup/Signup';
import Footer from './Footer/Footer';


function App() {
  return (
    <Router>
      <Menu/>
      <Homepage/>
      <div className="mainContainer">
        <Switch>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/logout">
            <Logout/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
        </Switch>
      </div>
      <hr></hr>
      <Footer/>
    </Router>
  );
}

export default App;
