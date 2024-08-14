import React, { useState } from "react";
import "./LoggedInProfileEdit.css";
import LoggedNavbar from "../../components/LoggedNavbar/LoggedNavbar";
import img1 from "../../assets/person.png";
import { Link } from "react-router-dom";

const LoggedInProfileEdit = () => {
  const [value, setValue] = useState("Cannot be Changed"); // Value for read-only input

  return (
    <>
      <LoggedNavbar />
      <div className="loggedInProfileEdit">
        <div className="getStart_bot_left loggedInProfileEdit_top">
          <div className="getStart_bot_left_register">
            <div className="getStart_bot_left_register_img">
              <img src={img1} alt="Profile" />
            </div>
            <div className="getStart_bot_left_register_heading loggedInProfileEdit_top_heading">
              <p>Upload Profile Image</p>
            </div>
          </div>
          <div className="getStart_bot_left_form">
            <div className="getStart_bot_left_form1">
              <label htmlFor="organizerName">Organizer/Club Name*</label>
              <input type="text" id="organizerName" value={value} readOnly />
            </div>
            <div className="getStart_bot_left_form1">
              <label htmlFor="email">Email*</label>
              <input type="email" id="email" value={value} readOnly />
            </div>
            <div className="getStart_bot_left_form1">
              <label htmlFor="mobile">Mobile*</label>
              <input type="number" id="mobile" />
            </div>
            <div className="getStart_bot_left_form1">
              <label htmlFor="username">Username*</label>
              <input type="text" id="username" />
            </div>
            <div className="getStart_bot_left_form1">
              <label htmlFor="college">College*</label>
              <input type="text" id="college" value={value} readOnly />
            </div>
            <div className="getStart_bot_left_form1">
              <label htmlFor="password">Create Password*</label>
              <input type="password" id="password" />
            </div>
            <div className="getStart_bot_left_form1">
              <label htmlFor="confirmPassword">Confirm Password*</label>
              <input type="password" id="confirmPassword" />
            </div>
            <div className="getStart_bot_left_form_button">
              <Link to="/home">
                <button>Update</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoggedInProfileEdit;
