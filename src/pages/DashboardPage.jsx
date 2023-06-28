import Dashboard from "../components/Dashboard";
import "../css/style.css";
import NavBar from "../components/NavBar";
import Stats from "../components/Stats";
import InventoryHeading from "../components/InventoryHeading";
import InventoryItems from "../components/InventoryItems";
import Footer from "../components/Footer";
import { useContext, useEffect } from "react";
import UserContext from "../features/UserContext";
import { useNavigate } from "react-router-dom";
import ItemsContext from "../features/ItemsContext";

function DashboardPage() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const { items, setItems } = useContext(ItemsContext);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="dashboard-page">
      <NavBar />
      <Dashboard />
      <Stats />
      <InventoryHeading />
      <InventoryItems items={items} />
      <Footer />
    </div>
  );
}

export default DashboardPage;
