import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_left">
        <div className="navbar_left_text">
          <Link to={"/"}>
            <p>TheSponsorSource</p>
          </Link>
        </div>
      </div>
      <div className="navbar_med">
        <div className="navbar_med_text">
          {/* Use a regular anchor tag for in-page navigation */}
          <a href="#howit_work">
            <p>How It Works</p>
          </a>

          <Link to="/discover">
            <p>Discover Events</p>
          </Link>
        </div>
      </div>
      <div className="navbar_right">
        <div className="navbar_right_buttons">
          <button>Get Started</button>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
