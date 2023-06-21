import React, { useState } from "react";
import loginService from "../services/loginService";
import "./LoginForm.css";
import { data } from "autoprefixer";

function LoginForm({ onFormSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();

    loginService
      .login({ email, password })
      .then((res) => {
        setUser(res);
        setEmail("");
        setPassword("");
      })
      .catch((error) => console.log(error));

    // const response = await loginService.login({ email, password };
  };
  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        className="email-input"
        placeholder="Email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="password-input"
        placeholder="Password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="login-button">Login</button>
      {/* <p className="forgot-password">Forgot password?</p> */}
      <p className="create-account" onClick={() => onFormSwitch("register")}>
        Don't have an account? create one
      </p>
    </form>
  );
}

export default LoginForm;
