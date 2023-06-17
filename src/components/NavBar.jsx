import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="h-14 flex justify-between items-center p-4 ">
      <Link className="text-4xl " to="/dashboard">
        MyAsenso
      </Link>
      <div className="flex items-center gap-8">
        <Link className=" hover:text-sky-700 cursor-pointer " to="/feedbacks">
          Feedback
        </Link>
        <Link
          className="bg-blue text-white px-4 py-2  text-center hover:bg-sky-700 cursor-pointer"
          to="/"
        >
          Logout
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
