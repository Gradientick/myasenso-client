import "./style.css";
import Login from "./pages/Login.jsx";
import DashboardPage from "./pages/DashboardPage";
// import Header from "./components/Header.jsx";
// import HeroSection from "./components/HeroSection.jsx";
// import UserFeedback from "./components/UserFeedback.jsx";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/dashboard" element={<DashboardPage />}></Route>
      </Routes>
    </>
  );
}
