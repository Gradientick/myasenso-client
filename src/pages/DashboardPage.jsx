import Dashboard from "../components/Dashboard";
import "../css/style.css";
import NavBar from "../components/NavBar";
import Stats from "../components/Stats";
import InventoryHeading from "../components/InventoryHeading";
import InventoryItems from "../components/InventoryItems";
import Footer from "../components/Footer";
import { useState, useContext } from "react";
import ItemContext from "../features/ItemContext";

function DashboardPage() {
  const [items, setItems] = useState([]);

  return (
    <div className="dashboard-page">
      <NavBar />
      <Dashboard />
      <Stats items={items} />
      <InventoryHeading items={items} setItems={setItems} />
      <InventoryItems items={items} setItems={setItems} />
      <Footer />
    </div>
  );
}

export default DashboardPage;
