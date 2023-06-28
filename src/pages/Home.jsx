import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import itemService from "../services/itemService.js";
import HeroSection from "../components/HeroSection.jsx";
import UserFeedback from "../components/UserFeedback.jsx";
import NavBar from "../components/NavBarGuest.jsx";
import Footer from "../components/Footer.jsx";
import UserContext from "../features/UserContext.js";

export default function Home() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (user?.token) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  return (
    <div>
      <NavBar />
      <HeroSection />
      <UserFeedback />
      <Footer />
    </div>
  );
}
