import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_top">
        <div className="footer_top_text">
          <Link to={"/"}>
            <p>TheSponsorSource</p>
          </Link>
        </div>
      </div>
      <div className="footer_med">
        <div className="footer_med_left">
          <p>
            Address: Main Govindpuram Rd, I-Block, Govindpuram, Ghaziabad, Uttar
            Pradesh 201013
          </p>
          <p>Mobile: +91 99999 99999</p>
          <p>Email: contact@thesponsorsource.com</p>
        </div>
        <div className="footer_med_med">
          <p>How It Works</p>
          <p>About Us</p>
        </div>
        <div className="footer_med_right">
          <p>Follow our Socials:</p>
          <div className="footer_med_right_logos">
            <div className="footer_twitter">
              <i class="fa-brands fa-x-twitter"></i>
            </div>
            <div className="footer_facebook">
              <i class="fa-brands fa-facebook-f"></i>
            </div>
            <div className="footer_insta">
              <i class="fa-brands fa-instagram"></i>
            </div>
            <div className="footer_"></div>
          </div>
        </div>
      </div>
      <div className="footer_bot">
        <p>© 2024 SponsorMyEvents | All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
