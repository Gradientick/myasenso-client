import "./style.css";
import { useContext } from "react";
import UserNameContext from "./features/UserNameContext";
import Login from "./pages/Login.jsx";
import DashboardPage from "./pages/DashboardPage";
import { Routes, Route } from "react-router-dom";
import FeedbackPage from "./pages/FeedbackPage";
import Footer from "./components/Footer";

export default function App({}) {
  return (
    <>
      <UserNameContext.Provider>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/dashboard" element={<DashboardPage />}></Route>
          <Route path="/feedbacks" element={<FeedbackPage />}></Route>
        </Routes>
      </UserNameContext.Provider>
    </>
  );
}
