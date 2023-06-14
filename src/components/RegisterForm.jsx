import React, { useState } from "react";
import "./LoginForm.css";
function RegisterForm({ onFormSwitch }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  return (
    <form>
      <input type="text" className="email-input" placeholder="Name" />
      <input type="text" className="email-input" placeholder="Email" />

      <input
        type="password"
        className="password-input"
        placeholder="Password"
      />
      <button className="login-button">Create Account</button>
      {/* <p className="forgot-password">Forgot password?</p> */}
      <p className="create-account" onClick={() => onFormSwitch("login")}>
        Already have an account? Click here to login
      </p>
    </form>
  );
}

export default RegisterForm;
