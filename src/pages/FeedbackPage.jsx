import React from "react";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";

function FeedbackPage() {
  return (
    <div>
      <Header />
      <Dashboard textContent={"Customer Feedbacks"} />
    </div>
  );
}

export default FeedbackPage;
