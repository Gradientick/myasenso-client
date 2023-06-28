import React, { useContext } from "react";
import TitleContext from "../features/TitleContext";
function Dashboard() {
  const { title, setTitle } = useContext(TitleContext);

  return (
    <div className="bg-primary grid h-60 place-items-center">
      <div className="flex-column justify-center text-center">
        <h1 className="text-center text-6xl">{title}</h1>
      </div>
    </div>
  );
}

export default Dashboard;
