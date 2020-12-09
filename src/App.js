import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
          <Route path="/Dashboard">
            <Dashboard/>
          </Route>
          <Route path="/Login">
            <Login/>
          </Route>
          <Route path="/Logout">
            <Logout/>
          </Route>
          <Route path="/Signup">
            <Signup/>
          </Route>
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
