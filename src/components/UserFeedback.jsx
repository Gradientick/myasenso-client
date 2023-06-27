import React from "react";
import "../css/UserFeedback.css";
import ceoImage from "../assets/ceo.png";
import soleImage from "../assets/sole prop.png";
import customer from "../assets/custServ.png";

function UserFeedback() {
  return (
    <div>
      <div className="feedback-container gap-11 bg-lightgrey">
        <h3 className="col-span-full font-black">USER FEEDBACK</h3>
        <div className="card">
          <div className="frame">
            <img src={soleImage} alt="Sole Proprietor" />
          </div>
          <h4>User Name</h4>
          <p className="card-text">
            I have been using the MyAsenso App for the past six months, and it
            has completely transformed the way I manage my business. As a small
            business owner, I needed a tool that could streamline my operations
            and help me stay organized, and this app delivered beyond my
            expectations. The user interface is sleek, intuitive, and visually
            appealing, making it easy for even a non-tech savvy person like me
            to navigate. From managing inventory and tracking sales to handling
            customer data, this app covers all the essential aspects of my
            business. I particularly love the real-time analytics feature, which
            allows me to monitor my sales and make data-driven decisions on the
            go.
          </p>
        </div>
        <div className="card">
          <div className="frame">
            <img src={customer} alt="satisfied customer" />
          </div>
          <h4>User Name</h4>
          <p className="card-text">
            One of the standout features of the app is its robust customer
            support. Whenever I have encountered a problem or had a question,
            their support team has been incredibly responsive and helpful. They
            truly go above and beyond to ensure that their customers are
            satisfied.
          </p>
        </div>
        <div className="card">
          <div className="frame">
            <img src={ceoImage} alt="ceo image" />
          </div>
          <h4>User Name</h4>
          <p className="card-text">
            I cannot recommend the MyAsenso App enough. It has simplified my
            workflow, enhanced productivity, and ultimately contributed to the
            growth of my business. If you are a business owner looking for an
            all-in-one solution to manage your operations effectively, give this
            app a try. You wont be disappointed!
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserFeedback;
