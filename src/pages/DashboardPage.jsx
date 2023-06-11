import React from "react";
import Dashboard from "../components/Dashboard";
import "../style.css";
import NavBar from "../components/NavBar";
import Stats from "../components/Stats";
import InventoryHeading from "../components/InventoryHeading";

function DashboardPage() {
  return (
    <div>
      <NavBar />
      <Dashboard />
      <Stats />
      <InventoryHeading />
    </div>
  );
}

export default DashboardPage;
