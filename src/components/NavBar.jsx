import React from "react";

function NavBar() {
  return (
    <div className="h-14 flex justify-between items-center p-4 ">
      <h1 className="text-4xl ">MyAsenso</h1>
      <button className="bg-blue text-white px-4 py-2  text-center hover:bg-sky-700">
        Logout
      </button>
    </div>
  );
}

export default NavBar;
