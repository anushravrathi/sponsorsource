import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter_heading">
        <p>Subscribe to our newsletter today!</p>
      </div>
      <div className="newsletter_para">
        <p>Never miss an update from us.</p>
      </div>
      <div className="newsletter_form">
        <input type="text" name="" id="" placeholder="your@email.com" />
        <button>Join Now</button>
      </div>
    </div>
  );
};

export default Newsletter;
