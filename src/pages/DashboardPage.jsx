import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import "../style.css";
import NavBar from "../components/NavBar";
import Stats from "../components/Stats";
import InventoryHeading from "../components/InventoryHeading";
import InventoryItems from "../components/InventoryItems";
import AddItemForm from "../components/AddItemForm";

function DashboardPage() {
  const [items, setItems] = useState([]);
  return (
    <div>
      <NavBar />
      <Dashboard />
      <Stats />
      <InventoryHeading />
      <InventoryItems Items={items} setItems={setItems} />
    </div>
  );
}

export default DashboardPage;
