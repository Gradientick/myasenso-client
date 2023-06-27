import { useState, useEffect } from "react";
import loginService from "../services/loginService";
import "../css/LoginForm.css";
import itemService from "../services/itemService";
import nameService from "../services/nameService";
import { Navigate, useNavigate } from "react-router-dom";

function LoginForm({ onFormSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      itemService.setToken(user.token);
    }
  }, []);

  useEffect(() => {
    if (user?.token) navigate("/dashboard");
  }, [user, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    loginService
      .login({ email, password })
      .then((res) => {
        window.localStorage.setItem("loggedUser", JSON.stringify(res));
        itemService.setToken(res.token);
        nameService.setToken(res.token);
        setUser(res);
        setPassword("");
      })
      .catch((error) => console.log(error));
  };

  // const response = await loginService.login({ email, password };

  return (
    <>
      <form onSubmit={handleLogin}>
        <h3>WELCOME USER</h3>
        <h2>Sign In to Your Account</h2>

        <label htmlFor="email">Email Address</label>
        <input
          type="text"
          className="email-input"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="password-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-button" onClick={handleLogin}>
          Sign In
        </button>
      </form>
      <p>
        Don't have an account?{" "}
        <span
          className="create-account"
          onClick={() => onFormSwitch("register")}
        >
          Sign Up and Get Started
        </span>
      </p>
    </>
  );
}

export default LoginForm;
