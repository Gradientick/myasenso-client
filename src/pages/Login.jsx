import React, { useState} from 'react'
import LoginForm from "../components/LoginForm.jsx";
import RegisterForm from '../components/RegisterForm.jsx';
import NavBar from '../components/NavBarLogin.jsx';
import '../css/LoginPage.css'

export default function Login() {
  const [currentForm, setCurrentForm] = useState(`login`);

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <>
      <NavBar/>
      <div className="login-page">
        <div className="login-form-container">
          {currentForm === "login" ? (
            <LoginForm onFormSwitch={toggleForm} />
          ) : (
            <RegisterForm onFormSwitch={toggleForm} />
          )}
        </div>
      </div>
    </>
  );
}
