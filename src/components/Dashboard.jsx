import React, { useState, useEffect, useContext } from "react";
import TitleContext from "../features/TitleContext";
function Dashboard({ textContent }) {
  const { title, setTitle } = useContext(TitleContext);

  // useEffect(() => {
  //   nameService.getName().then((response) => {
  //     setName(response.data);
  //   });
  // });

  return (
    <div className="bg-primary grid h-60 place-items-center">
      <div className="flex-column justify-center text-center">
        <h1 className="text-center text-6xl">{title}</h1>
        <p>{textContent}</p>
      </div>
    </div>
  );
}

export default Dashboard;
