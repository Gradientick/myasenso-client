import Dashboard from "../components/Dashboard";
import "../css/style.css";
import NavBar from "../components/NavBar";
import Stats from "../components/Stats";
import InventoryHeading from "../components/InventoryHeading";
import InventoryItems from "../components/InventoryItems";
import Footer from "../components/Footer";

function DashboardPage() {
  return (
    <div className="dashboard-page">
      <NavBar />
      <Dashboard />
      <Stats />
      <InventoryHeading />
      <InventoryItems />
      <Footer />
    </div>
  );
}

export default DashboardPage;
