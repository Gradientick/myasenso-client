import React from "react";
import "./HeroSection.css";
import LoginForm from "./LoginForm";
function HeroSection() {
  return (
    <div>
      <div className="header">
        <div className="header-container">
          <div className="welcome-text">
            <h2>Hi, Welcome to MyAsenso!</h2>
          </div>
          <div className="login-form-container">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
