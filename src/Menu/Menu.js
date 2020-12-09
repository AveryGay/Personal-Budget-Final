import React from 'react';

import{
    Link
  } from "react-router-dom";

function Menu() {
  return (
    <nav className="topnav">
        <ul>
            <li><Link to="Homepage">Homepage</Link></li>
            <li><Link to="Dashboard">Dashboard</Link></li>
            <li><Link to="Login">Login</Link></li>
            <li><Link to="Logout">Logout</Link></li>
            <li><Link to="Signup">Signup</Link></li>
        </ul>
    </nav>
  );
}

export default Menu;