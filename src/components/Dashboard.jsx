import React, { useState } from "react";
function Dashboard() {
  const [Name, SetName] = useState("Business Name");
  return (
    <div className="bg-primary grid h-60 place-items-center">
      <div className="">
        <h1 className="text-center text-6xl">{Name}</h1>
      </div>
    </div>
  );
}

export default Dashboard;
