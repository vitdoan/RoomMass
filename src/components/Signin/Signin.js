import React, { useState } from "react";
import {AiOutlineHome} from 'react-icons/ai'

import "./Signin.css";

export default function SignIn({ changeRoute, loadUser }) {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  const onUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleErrrors = (res) => {
    if (!res.ok){
      alert("Incorrect Username/Password");
      throw Error(res.statusText)
    }
    else{
      return res.json();
    }
    }

  // const onSubmitSignIn = () => {
  //   fetch("http://localhost:3001/signin", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       username: username,
  //       password: password,
  //     }),
  //   })
  //     .then(handleErrrors)
  //     .then((data) => {
  //       if (data) {
  //         loadUser(data);
  //         changeRoute(3);
  //       } else {

  //       }
  //     })
  //     .catch(err=>console.log(err));
  // };
  const onSubmitSignIn = () => {
    if(username.length === 0 || password.length === 0){
      alert("Missing field")
    }
    else{
      loadUser({
        username: username,
        password: password
      });
      changeRoute(3);
    }
  }

  return (
    <div className="login_wrapper">
      <div id = "cover" className="login">
        <h1 id="welcome_back">User Login</h1>
        <input
          type="text"
          placeholder="Username"
          onChange={onUsernameChange}
          className="username"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={onPasswordChange}
          className="password"
        />
        <div className = "row">
        <button className="col-6 loginButton" onClick={onSubmitSignIn}>
          Sign In
        </button>
        <button className="col-6 loginButton" onClick={() => changeRoute(2)}>
          
            Register
         
        </button>

        </div>
        
        <button className="loginButton" onClick={() => changeRoute(3)}>
        <AiOutlineHome/>
        </button>
      </div>
    </div>
  );
}
