import { useState, useEffect, useContext } from "react";
import "../css/LoginForm.css";
import { useNavigate } from "react-router-dom";
import loginService from "../services/loginService.js";
import itemService from "../services/itemService.js";
import UserContext from "../features/UserContext";

function LoginForm({ onFormSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

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
        setUser(res);
        setPassword("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <h3>WELCOME TO MYASENSO</h3>
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

        <button type="submit" className="login-button">
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
