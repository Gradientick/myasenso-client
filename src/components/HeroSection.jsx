import React, { useState } from "react";
import "../css/HeroSection.css";
import logo from '../assets/MyAsenso.png'

function HeroSection() {
  return (
    <div>
      <div className="header">
        <div className="header-container">
          <div className="welcome-text">
            <img src={logo} alt="logo" className="page-logo"/>
            <h2>Take the hassle out of management in your business.</h2>
            <p><span>MyAsenso</span> is the Internet's business inventory and manager, used by hundreds of business owners, entrepreneur, and content creators.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
