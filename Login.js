import React, { useState } from "react";
import Axios from "axios";
// reate a user login form use react
function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (email === "" && password === "") {
      alert("Please enter all the fields");
      return;
    } else if (email === "") {
      alert("Please enter the email");
      return;
    } else if (password === "") {
      alert("Please enter the password");
      return;
    } else {
      Axios.post("http://localhost:3001/login", {
        email: email,
        password: password,
      }).then((response) => {
        if (response.data.message) {
          setTitle(response.data.message);
        } else {
          setTitle("Welcome, " + response.data[0].name);
        }
      });
    }
  };
  const [title, setTitle] = useState("Please login");

  return (
    <form className="login-form" onSubmit={submitHandler}>
      <h2 className="title">{title}</h2>

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
        Login
      </button>

      <button
        type="button"
        className="button-75"
        onClick={() => props.onSwitch("signup")}
      >
        Don't have an account? Sign up here
      </button>
    </form>
  );
}

export default Login;
