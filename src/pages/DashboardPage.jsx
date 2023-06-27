import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import "../css/style.css";
import NavBar from "../components/NavBar";
import Stats from "../components/Stats";
import InventoryHeading from "../components/InventoryHeading";
import InventoryItems from "../components/InventoryItems";

function DashboardPage() {
  const [items, setItems] = useState([]);
  return (
    <div className="dashboard-page">
      <NavBar />
      <Dashboard />
      <Stats />
      <InventoryHeading />
      <InventoryItems Items={items} setItems={setItems} />
    </div>
  );
}

export default DashboardPage;
