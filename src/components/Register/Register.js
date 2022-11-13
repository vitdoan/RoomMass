import React, { useState } from "react";
import "../Signin/Signin.css";
import { AiOutlineHome } from "react-icons/ai";

export default function Register({ changeRoute, loadUser }) {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [name, setName] = useState("");

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleErrrors = (res) => {
    if (!res.ok) {
      alert("Incorrect Username/Password");
      throw Error(res.statusText);
    } else {
      return res.json();
    }
  };

//   const onSubmitRegister = () => {
//     fetch("http://localhost:3001/register", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         name: name,
//         username: username,
//         password: password,
//       }),
//     })
//       .then(handleErrrors)
//       .then((data) => {
//         if (data) {
//           loadUser(data);
//           changeRoute(3);
//         } else {
//         }
//       });
//   };

  const onSubmitRegister = () => {
	if(name.length === 0 || username.length === 0 || password.length === 0){
		alert("Missing field")
	}
	else{
		loadUser({
			name:name,
			username:username,
			password:password
		})
		changeRoute(3);
	}
  }

  return (

	  <div className = "reg_wrapper">
		  <div className="login">
      <h1 className = "reg_title">User Registration</h1>
      <input
        type="text"
        placeholder="Name"
        onChange={onNameChange}
        className="name"
      />
      <input
        type="text"
        placeholder="Username"
        onChange={onUsernameChange}
        className="username"
      />
      <input
        type="password"
        placeholder="Password"
        className="password"
        onChange={onPasswordChange}
      />
      <div className="row">
        <button className="col-6 loginButton" onClick={onSubmitRegister}>
          Register
        </button>
        <button className="col-6 loginButton" onClick={() => changeRoute(1)}>
          Sign In
        </button>
      </div>

      <button className="loginButton" onClick={() => changeRoute(3)}>
        <AiOutlineHome />
      </button>
    </div>

	  </div>
    
  );
}
