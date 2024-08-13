import React from "react";
import "./Howit.css";
import img1 from "../../assets/in3Min.png";

const Howit = () => {
  return (
    <div className="howit" id="howit_work">
      <div className="howit_left">
        <img src={img1} alt="" />
      </div>
      <div className="howit_right">
        <p>How It Works - SponsorMyEvents.Com</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/nSDgHBxUbVQ?si=HXjQio8Rek-I2eZU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Howit;
