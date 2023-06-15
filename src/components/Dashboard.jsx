import React, { useState } from "react";
function Dashboard({ textContent }) {
  const [Name, SetName] = useState("Business Name");
  return (
    <div className="bg-primary grid h-60 place-items-center">
      <div className="flex-column justify-center text-center">
        <h1 className="text-center text-6xl">{Name}</h1>
        <p>{textContent}</p>
      </div>
    </div>
  );
}

export default Dashboard;
