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
          <p>How It Works</p>
          <p>Discover Events</p>
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
