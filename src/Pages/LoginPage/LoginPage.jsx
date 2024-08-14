import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

import img1 from "../../assets/person.png";
const LoginPage = () => {
  useEffect(() => {
    const element = document.querySelector(".loginPage_top");
    if (element) {
      element.classList.add("animate");
    }
  }, []);

  return (
    <div className="loginPage">
      <div className="navbar_left">
        <div className="navbar_left_text loginPage_top">
          <Link to={"/"}>
            <p>TheSponsorSource</p>
          </Link>
        </div>
      </div>
      <div className="loginPage_bot">
        <div className="loginPage_bot_top">
          <div className="loginPage_top_img">
            <img src={img1} alt="" />
          </div>
          <div className="loginPage_top_heading">
            <p>Sign In</p>
          </div>
        </div>
        <div className="loginPage_form">
          <div className="loginPage_form1">
            <label htmlFor="">Username*</label>
            <input type="text" />
          </div>
          <div className="loginPage_form1">
            <label htmlFor="">Password*</label>
            <input type="password" />
          </div>
          <div className="loginPage_button">
            <Link to={"/home"}>
              <button>Sign In</button>
            </Link>
            <a href="">Forgot Password ?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
