import React from "react";
import "./LoginForm.css";
function LoginForm() {
  return (
    <form>
      <input type="text" className="email-input" placeholder="Email" />
      <input
        type="password"
        className="password-input"
        placeholder="Password"
      />
      <button className="login-button">Login</button>
      <p className="forgot-password">Forgot password?</p>
      <p className="create-account">Don't have an account? create one</p>
    </form>
  );
}

export default LoginForm;
