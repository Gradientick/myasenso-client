import React from "react";
import HeroSection from "../components/HeroSection.jsx";
import UserFeedback from "../components/UserFeedback.jsx";
import NavBar from "../components/NavBarGuest.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <UserFeedback />
      <Footer />
    </div>
  );
}
