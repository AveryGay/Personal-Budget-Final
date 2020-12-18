import React, { useState } from 'react';
import axios from "axios";
//const mongoose = require("mongoose");


function Signup() {

  const [email, newEmail] = useState({});
  const [password, newPassword] = useState({});

  const pushEmail = (event) => {
    newEmail(event.target.value);
  };

  const pushPassword = (event) => {
    newPassword(event.target.value);
  };

  const whenClick = (event) => {
    event.preventDefault(event);
    console.log(email);
    console.log(password);
    axios.post("http://localhost:4000/signup", { email, password }).then((res) => {
    document.getElementById('form1').value='';
    })
    .catch((error) => {
      console.log(error);
    })
  };

  return (
    <div>
        <h1>If you do not have an account feel free to sign up below!</h1>

        <form onSubmit={whenClick} id="form1">
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" onChange={pushEmail}></input>
          </div>
          <div>
          <label htmlFor="password">Password:</label>
            <input type="password" onChange={pushPassword}></input>
          </div>
          <div>
            <input type="submit" value="Signup Now!"></input>
          </div>
        </form>
    </div>
  );
}

export default Signup;