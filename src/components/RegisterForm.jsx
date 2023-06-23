import { useState } from "react";
import registerService from "../services/registerService";

import "./LoginForm.css";
function RegisterForm({ onFormSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [title, setTitle] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    registerService
      .register({ email, password, name, number, title })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    // onFormSwitch("login");
    // setEmail("");
    // setPassword("");
    // setName("");
    // setNumber("");
    // setTitle("");
  };

  return (
    <form onSubmit={handleRegister}>
      <input
        type="text"
        className="email-input"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        className="email-input"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="number"
        className="email-input"
        placeholder="phone number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <input
        type="text"
        className="email-input"
        placeholder="Business Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="password"
        className="password-input"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="login-button" type="submit" onClick={handleRegister}>
        Create Account
      </button>
      {/* <p className="forgot-password">Forgot password?</p> */}
      <p className="create-account" onClick={() => onFormSwitch("login")}>
        Already have an account? Click here to login
      </p>
    </form>
  );
}

export default RegisterForm;
