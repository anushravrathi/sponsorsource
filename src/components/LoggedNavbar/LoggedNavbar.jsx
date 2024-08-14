import React from "react";
import "./LoggedNavbar.css";
import { Link } from "react-router-dom";
import img1 from "../../assets/Ellipse3.png";
import img2 from "../../assets/mail_outline.png";

const LoggedNavbar = () => {
  return (
    <div className="LoggedNavbar">
      <div className="navbar_left">
        <div className="navbar_left_text">
          <Link to={"/home"}>
            <p>TheSponsorSource</p>
          </Link>
        </div>
      </div>
      <div className="loggedNavbar_right">
        <Link to={"/message"}>
          <div className="loggedNavbar_right_left">
            <div className="dot"></div>
            <img src={img2} alt="" />
          </div>
        </Link>
        <div className="loggedNavbar_right_med">
          <Link>UserName</Link>
        </div>
        <div className="loggedNavbar_right_right">
          <img src={img1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoggedNavbar;
