import { Link } from "react-router-dom";
import logo from "../assets/MyAsenso.png";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    window.localStorage.clear();
    navigate("/");
  };
  return (
    <div className="h-20 flex justify-between items-center p-4 ">
      <Link to="/dashboard">
        <h1 className="page-title-txt">
          MY<span>ASENSO</span>
        </h1>
      </Link>
      <div className="flex items-center gap-8">
        <Link className=" hover:text-sky-700 cursor-pointer " to="/feedbacks">
          Feedback
        </Link>
        <p className=" hover:text-sky-700 cursor-pointer"></p>
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

export default NavBar;
