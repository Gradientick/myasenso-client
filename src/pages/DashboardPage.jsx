import React from "react";
import Dashboard from "../components/Dashboard";
import "../style.css";
import NavBar from "../components/NavBar";
import Stats from "../components/Stats";
import InventoryHeading from "../components/InventoryHeading";
import InventoryItems from "../components/InventoryItems";

function DashboardPage({ items }) {
  return (
    <div>
      <NavBar />
      <Dashboard />
      <Stats />
      <InventoryHeading />
      <InventoryItems Items={items} />
    </div>
  );
}

export default DashboardPage;
