import React, { useState } from "react";

import "./LoginForm.css";

function LoginForm({ onFormSwitch }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="email-input" placeholder="Email" />
      <input
        type="password"
        className="password-input"
        placeholder="Password"
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
