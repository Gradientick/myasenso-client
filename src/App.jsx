import "./css/style.css";
import { useContext } from "react";
import UserNameContext from "./features/UserNameContext";
import Home from "./pages/Home.jsx";
import DashboardPage from "./pages/DashboardPage";
import { Routes, Route } from "react-router-dom";
import FeedbackPage from "./pages/FeedbackPage";
import Login from "./pages/Login";

export default function App({}) {
  return (
    <>
      <UserNameContext.Provider>
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dashboard" element={<DashboardPage />}></Route>
          <Route path="/feedbacks" element={<FeedbackPage />}></Route>
        </Routes>
      </UserNameContext.Provider>
    </>
  );
}
