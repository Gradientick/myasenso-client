import "./css/style.css";
import UserNameContext from "./features/UserNameContext";
import Home from "./pages/Home.jsx";
import DashboardPage from "./pages/DashboardPage";
import { Routes, Route } from "react-router-dom";
import FeedbackPage from "./pages/FeedbackPage";
import Login from "./pages/Login";
import ItemsContext from "./features/ItemsContext";
import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  return (
    <>
      <ItemsContext.Provider value={{ items, setItems }}>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dashboard" element={<DashboardPage />}></Route>
          <Route path="/feedbacks" element={<FeedbackPage />}></Route>
        </Routes>
      </ItemsContext.Provider>
    </>
  );
}
