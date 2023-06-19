import React from "react";
import "./Header.css";
import logo from '../assets/MyAsenso.png'
function Header() {
  return (
    <div>
      <img src={logo} alt="logo" className="page-title"/>
    </div>
  );
}

export default Header;
