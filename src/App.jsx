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
import LoadingContext from "./features/LoadingContext";
import itemService from "./services/itemService";

export default function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState([0]);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

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
                <LoadingContext.Provider value={{ loading, setLoading }}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/feedbacks" element={<FeedbackPage />} />
                  </Routes>
                </LoadingContext.Provider>
              </UserContext.Provider>
            </PriceContext.Provider>
          </TitleContext.Provider>
        </NameContext.Provider>
      </ItemsContext.Provider>
    </>
  );
}
