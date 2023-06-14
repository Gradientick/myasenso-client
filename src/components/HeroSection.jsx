import React, { useState } from "react";
import "./HeroSection.css";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
function HeroSection() {
  const [currentForm, setCurrentForm] = useState(`login`);

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <div>
      <div className="header">
        <div className="header-container">
          <div className="welcome-text">
            <h2>Hi, Welcome to MyAsenso!</h2>
          </div>
          <div className="login-form-container">
            {currentForm === "login" ? (
              <LoginForm onFormSwitch={toggleForm} />
            ) : (
              <RegisterForm onFormSwitch={toggleForm} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
