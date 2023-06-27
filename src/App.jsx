import "./css/style.css";
import Home from "./pages/Home.jsx";
import DashboardPage from "./pages/DashboardPage";
import { Routes, Route } from "react-router-dom";
import FeedbackPage from "./pages/FeedbackPage";
import Login from "./pages/Login";
import { useState } from "react";
import ItemsContext from "./features/ItemsContext";
import NameContext from "./features/NameContext";
import TitleContext from "./features/TitleContext";
import PriceContext from "./features/PriceContext";

export default function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState([]);
  return (
    <>
      <ItemsContext.Provider value={{ items, setItems }}>
        <NameContext.Provider value={{ name, setName }}>
          <TitleContext.Provider value={{ title, setTitle }}>
            <PriceContext.Provider value={{ price, setPrice }}>
              <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/" element={<Home />}></Route>
                <Route path="/dashboard" element={<DashboardPage />}></Route>
                <Route path="/feedbacks" element={<FeedbackPage />}></Route>
              </Routes>
            </PriceContext.Provider>
          </TitleContext.Provider>
        </NameContext.Provider>
      </ItemsContext.Provider>
    </>
  );
}
