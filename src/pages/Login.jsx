import React, { useState } from "react";
import LoginForm from "../components/LoginForm.jsx";
import RegisterForm from "../components/RegisterForm.jsx";
import NavBar from "../components/NavBarLogin.jsx";
import "../css/LoginPage.css";
import HeroSection from "../components/HeroSection.jsx";
import UserFeedback from "../components/UserFeedback.jsx";
import Footer from "../components/Footer.jsx";

export default function Login() {
  const [currentForm, setCurrentForm] = useState(`login`);

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <>
      <NavBar />
      <div className="login-page">
        <div className="login-form-container">
          {currentForm === "login" ? (
            <LoginForm onFormSwitch={toggleForm} />
          ) : (
            <RegisterForm onFormSwitch={toggleForm} />
          )}
        </div>
      </div>
      <div>
        <HeroSection />
        <UserFeedback />
        <Footer />
      </div>
    </>
  );
}
