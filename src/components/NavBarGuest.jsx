import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar w-auto justify-between items-center p-5 ">
      <Link to="/">
        <h1 className="page-title-txt">
          MY<span>ASENSO</span>
        </h1>
      </Link>
      <div className="flex items-center gap-5">
        <Link className=" hover:text-sky-700 cursor-pointer " to="/">
          Home
        </Link>
        <Link className="bg-blue text-white px-4 py-2  text-center hover:bg-sky-700 cursor-pointer" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
}


