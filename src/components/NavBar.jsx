import { Link } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import NameContext from "../features/NameContext";

export default function NavBar() {
  const { name } = useContext(NameContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    window.localStorage.clear();
    navigate("/");
  };
  return (
    <div className="navbar justify-between items-center p-4 ">
      <Link to="/">
        <h1 className="page-title-txt">
          MY<span>ASENSO</span>
        </h1>
      </Link>
      <div className="flex items-center gap-8">
        <Link className=" hover:text-sky-700 cursor-pointer " to="/dashboard">
          Dashboard
        </Link>
        <Link className=" hover:text-sky-700 cursor-pointer " to="/feedbacks">
          Feedback
        </Link>
        <p>{name} is logged in</p>
        <button
          className="bg-blue text-white px-4 py-2  text-center hover:bg-sky-700 cursor-pointer"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
