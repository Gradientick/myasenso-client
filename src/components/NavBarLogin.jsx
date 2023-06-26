import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar justify-between items-center p-4 ">
      <Link to="/">
        <h1 className="page-title-txt">
          MY<span>ASENSO</span>
        </h1>
      </Link>
    </div>
  );
}


