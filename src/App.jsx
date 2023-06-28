import "./css/style.css";
import Home from "./pages/Home.jsx";
import DashboardPage from "./pages/DashboardPage";
import { Routes, Route } from "react-router-dom";
import FeedbackPage from "./pages/FeedbackPage";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import ItemsContext from "./features/ItemsContext";
import NameContext from "./features/NameContext";
import TitleContext from "./features/TitleContext";
import PriceContext from "./features/PriceContext";
import UserContext from "./features/UserContext";
import itemService from "./services/itemService";

export default function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");

    if (loggedUserJSON) {
      const savedUser = JSON.parse(loggedUserJSON);
      setUser(savedUser);
      itemService.setToken(savedUser.token);
    }
  }, []);

  return (
    <>
      <ItemsContext.Provider value={{ items, setItems }}>
        <NameContext.Provider value={{ name, setName }}>
          <TitleContext.Provider value={{ title, setTitle }}>
            <PriceContext.Provider value={{ price, setPrice }}>
              <UserContext.Provider value={{ user, setUser }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/dashboard" element={<DashboardPage />} />
                  <Route path="/feedbacks" element={<FeedbackPage />} />
                </Routes>
              </UserContext.Provider>
            </PriceContext.Provider>
          </TitleContext.Provider>
        </NameContext.Provider>
      </ItemsContext.Provider>
    </>
  );
}
