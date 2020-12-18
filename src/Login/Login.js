import React from 'react';
import axios from "axios";
//const mongoose = require("mongoose");

function Login() {

  const whenClick = (event) => {
    event.preventDefault(event);
    //console.log(email);
    //console.log(password);

    const data = {
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
    }
  axios.post('http://localhost:4000/login', data)
      .then(res => {
          console.log(res);
          document.getElementById('email').value = '';
          document.getElementById('password').value = '';
          if (res && res.data && res.data.success) {
              const token = res.data.token;
              localStorage.setItem('jwt', token);
              window.location.href = "/dashboard";
          }
      });
  };


  return (
    <div>
        <h1>If you have an account feel free to sign in below!</h1>

        <form onSubmit={whenClick}>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email"></input>
          </div>
          <div>
          <label htmlFor="password">Password:</label>
            <input type="password" id="password"></input>
          </div>
          <div>
            <input type="submit" value="Login!"></input>
          </div>
        </form>
    </div>
  );
}

export default Login;