import React from "react";
import { Link } from "react-router-dom";
import "./GetStart.css";
import img1 from "../../assets/person.png";

const GetStart = () => {
  return (
    <div className="getStart">
      <div className="navbar_left">
        <div className="navbar_left_text getStart">
          <Link to={"/"}>
            <p>TheSponsorSource</p>
          </Link>
        </div>
      </div>
      <div className="getStart_bot">
        <div className="getStart_bot_left">
          <div className="getStart_bot_left_register">
            <div className="getStart_bot_left_register_img">
              <img src={img1} alt="" />
            </div>
            <div className="getStart_bot_left_register_heading">
              <p>Register</p>
            </div>
          </div>
          <div className="getStart_bot_left_form">
            <div className="getStart_bot_left_form1">
              <label htmlFor="">Organizer/Club Name*</label>
              <input type="text" />
            </div>
            <div className="getStart_bot_left_form1">
              <label htmlFor="">Email*</label>
              <input type="email" />
            </div>
            <div className="getStart_bot_left_form1">
              <label htmlFor="">Mobile*</label>
              <input type="number" />
            </div>
            <div className="getStart_bot_left_form1">
              <label htmlFor="">Username*</label>
              <input type="text" />
            </div>
            <div className="getStart_bot_left_form1">
              <label htmlFor="">College*</label>
              <input type="text" />
            </div>
            <div className="getStart_bot_left_form1">
              <label htmlFor="">Create Password*</label>
              <input type="password" />
            </div>
            <div className="getStart_bot_left_form1">
              <label htmlFor="">Confirm Password**</label>
              <input type="password" />
            </div>
            <div className="getStart_bot_left_form_button">
              <Link to={"/home"}>
                <button>Register</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="get_start_bot_med">
          <p>or</p>
        </div>
        <div className="getStart_bot_right">
          <div className="getStart_bot_right_top">
            <div className="getStart_bot_right_top_img">
              <img src={img1} alt="" />
            </div>
            <div className="getStart_bot_right_top_heading">
              <p>Register using Google</p>
            </div>
          </div>
          <div className="getStart_bot_right_top">
            <div className="getStart_bot_right_top_img">
              <img src={img1} alt="" />
            </div>
            <div className="getStart_bot_right_top_heading">
              <p>Register using Microsoft</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStart;
