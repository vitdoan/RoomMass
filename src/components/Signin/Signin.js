import React, { useState } from "react";
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

  // const onSubmitSignIn = () => {
  //   fetch("http://localhost:3001/signin", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       username: userName,
  //       password: password,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data) {
  //         loadUser(data);
  //         changeRoute(3);
  //       } else {
  //       }
  //     });
  // };
  const onSubmitSignIn = () => {
    loadUser({
      username: username,
      password: password
    });
    changeRoute(3);
  }

  return (
    <div className="login_wrapper">
      <div className="login">
        <h1 id="welcome_back">Welcome Back!</h1>
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
        <button className="loginButton" onClick={onSubmitSignIn}>
          Sign In
        </button>
        <div className="signup-option">
          Not a member?{" "}
          <a href="#" onClick={() => changeRoute(2)}>
            Register
          </a>{" "}
          now
        </div>
      </div>
    </div>
  );
}
