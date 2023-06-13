import React, { useState } from "react";
import "./HeroSection.css";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
function HeroSection() {
  const [displayRegisration, setDisplayRegistration] = useState(false);
  return (
    <div>
      <div className="header">
        <div className="header-container">
          <div className="welcome-text">
            <h2>Hi, Welcome to MyAsenso!</h2>
          </div>
          <div className="login-form-container">
            <LoginForm />
            <RegisterForm visible={displayRegisration} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
