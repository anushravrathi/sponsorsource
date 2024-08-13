import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/Hero.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="home_hero1">
      <div className="home_hero">
        <img src={img1} alt="" />
      </div>
      <div className="home_hero_buttons">
        <Link to="/forCollege" className="Link_heroButton">
          For Colleges
        </Link>
        <Link to="/forSponsors" className="Link2_heroButton">
          For Sponsors
        </Link>
      </div>
    </div>
  );
};

export default Hero;
