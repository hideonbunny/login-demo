import React, { useState } from "react";
import Axios from "axios";
// reate a user login form use react
function Signup(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (email === "" && password === "" && username === "") {
      alert("Please enter all the fields");
      return;
    } else if (username === "") {
      alert("Please enter the username");
      return;
    } else if (email === "") {
      alert("Please enter the email");
      return;
    } else if (password === "") {
      alert("Please enter the password");
      return;
    } else {
      Axios.post("http://localhost:3001/signup", {
        username: username,
        email: email,
        password: password,
      }).then((response) => {
        if (response.data.message) {
          alert(response.data.message);
        } else {
          setTitle(`Please back to login`);
        }
      });
    }
  };

  const [title, setTitle] = useState("Please Sign up");

  return (
    <form className="login-form" onSubmit={submitHandler}>
      <h2 className="title">{title}</h2>

      <label className="label-place">your username:</label>
      <input
        type="text"
        placeholder="username"
        id="username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <label className="label-place">your email:</label>
      <input
        type="email"
        placeholder="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <label className="label-place">your password:</label>
      <input
        type="password"
        placeholder="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit" className="button-75">
        Sign up
      </button>
      <button className="button-75" onClick={() => props.onSwitch("login")}>
        back to login
      </button>
    </form>
  );
}

export default Signup;
