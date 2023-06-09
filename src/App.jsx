import "./style.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import UserFeedback from "./components/UserFeedback";
export default function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <UserFeedback />

      <div className="footer">FOOTER</div>
    </>
  );
}
