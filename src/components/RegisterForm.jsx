import React from "react";
import "./LoginForm.css";
function RegisterForm({ visible }) {
  if (!visible) return null;
  return (
    <form>
      <form>
        <input type="text" className="email-input" placeholder="Email" />
        <input
          type="password"
          className="password-input"
          placeholder="Password"
        />
        <button className="login-button">Create Account</button>
        {/* <p className="forgot-password">Forgot password?</p>
      <p className="create-account" onClick={}>Don't have an account? create one</p> */}
      </form>
    </form>
  );
}

export default RegisterForm;
