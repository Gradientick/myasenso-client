import "./css/style.css";
import Home from "./pages/Home.jsx";
import DashboardPage from "./pages/DashboardPage";
import { Routes, Route } from "react-router-dom";
import FeedbackPage from "./pages/FeedbackPage";
import Login from "./pages/Login";
import { useState } from "react";
import ItemsContext from "./features/ItemsContext";
import NameContext from "./features/NameContext";

export default function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  return (
    <>
      <ItemsContext.Provider value={{ items, setItems }}>
        <NameContext.Provider value={{ name, setName }}>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/dashboard" element={<DashboardPage />}></Route>
            <Route path="/feedbacks" element={<FeedbackPage />}></Route>
          </Routes>
        </NameContext.Provider>
      </ItemsContext.Provider>
    </>
  );
}
