import { useState, useEffect } from "react";
import loginService from "../services/loginService";
import "./LoginForm.css";
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
    <form onSubmit={handleLogin}>
      {/* {user === null ?  : (to="/dashboard")} */}
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

      <button className="login-button" onClick={handleLogin}>
        Login
      </button>

      <p className="create-account" onClick={() => onFormSwitch("register")}>
        Don't have an account? create one
      </p>
    </form>
  );
}

export default LoginForm;
