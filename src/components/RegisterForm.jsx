import { useState, useContext } from "react";
import registerService from "../services/registerService";
import LoadingContext from "../features/LoadingContext";
import LoadingSpinner from "../loadingComponents/LoadingSpinner";

import "../css/LoginForm.css";
function RegisterForm({ onFormSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [title, setTitle] = useState("");
  const { loading, setLoading } = useContext(LoadingContext);
  const [error, setError] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    registerService
      .register({ email, password, name, number, title })
      .then((res) => {
        setLoading(true);
        console.log(res);
        setLoading(false);
        onFormSwitch("login");
      })
      .catch((error) => setError(true));

    // setEmail("");
    // setPassword("");
    // setName("");
    // setNumber("");
    // setTitle("");
  };

  if (loading) {
    return (
      <div className="flex p-20 items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <form onSubmit={handleRegister}>
      <h3>Get Started with MyAsenso</h3>
      <p>Get Started by Creating an Account</p>
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
      <button className="login-button" type="submit">
        Create Account
      </button>
      {error && (
        <p className="error-message text-orange-600">Email already exists</p>
      )}
      <p>
        Already have an account?{" "}
        <span className="create-account" onClick={() => onFormSwitch("login")}>
          Sign in
        </span>
      </p>
    </form>
  );
}

export default RegisterForm;
