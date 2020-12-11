import React from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";
//const mongoose = require("mongoose");

function Login() {

  //oof

  return (
    <div>
        <h1>If you have an account feel free to sign in below!</h1>

        <form>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email"></input>
          </div>
          <div>
          <label htmlFor="password">Password:</label>
            <input type="password" id="Password"></input>
          </div>
          <div>
            <input type="submit" value="Login!"></input>
          </div>
        </form>
    </div>
  );
}

export default Login;