import React from "react";
import "./Whyus.css";
// import Whyus from '../../assets/'
import { whyUsTop } from "../../assets/assets";
import { whyUsBot } from "../../assets/assets";

const Whyus = () => {
  return (
    <div className="whyus_container">
      <div className="whyus_heading">Why Us ?</div>
      <div className="whyUs_top">
        <div className="whyus_para1">Publish your events and get sponsors</div>
        <div className="whyus_top_container">
          <ul>
            {whyUsTop.map((item, index) => {
              return (
                <li>
                  <div className="why_top_container_slide">
                    <img src={item.img} alt="" />
                    <p className="why_top_container_slide_para">
                      {item.heading}
                    </p>
                    <p className="why_top_container_slide_para2">{item.para}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="whyus_bot">
        <div className="whyus_para2">
          Engage your target market through event sponsorship
        </div>
        <div className="whyus_bot_container">
          <ul>
            {whyUsBot.map((item, index) => {
              return (
                <li>
                  <div className="why_bot_container_slide">
                    <img src={item.img} alt="" />
                    <p className="why_top_container_slide_para">
                      {item.heading}
                    </p>
                    <p className="why_top_container_slide_para2">{item.para}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
