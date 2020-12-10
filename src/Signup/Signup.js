import React, { useState } from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";
//const mongoose = require("mongoose");


function Signup() {

  const [email, newEmail] = useState({});
  const [password, newPassword] = useState({});
  const memory = useHistory();

  const pushEmail = (props) => {
    newEmail(props.target.value);
  };

  const pushPassword = (props) => {
    newPassword(props.target.value);
  };

  const whenClick = (props) => {
    axios.post("http:localhost:3000/Signup", { email, password }).then((res) => {
      memory.push("/Login");
    })
    .catch((error) => {
      console.log(error);
    })
  };

  return (
    <div>
        <h1>If you do not have an account feel free to sign up below!</h1>

        <form onSubmit={whenClick}>
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