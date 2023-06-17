import React from "react";
import Dashboard from "../components/Dashboard";
import NavBar from "../components/NavBar";

function FeedbackPage() {
  return (
    <div>
      <NavBar />
      <Dashboard textContent={"Customer Feedbacks"} />
    </div>
  );
}

export default FeedbackPage;
