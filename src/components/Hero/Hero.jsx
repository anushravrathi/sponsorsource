import React from "react";
import img1 from "../../assets/Hero.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="home_hero1">
      <div className="home_hero">
        <img src={img1} alt="" />
      </div>
      <div className="home_hero_buttons">
        <button>For Colleges</button>
        <button>For Sponsors</button>
      </div>
    </div>
  );
};

export default Hero;
