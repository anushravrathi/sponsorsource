import React from "react";
import "./LoggedInMessage.css";
import LoggedNavbar from "../../components/LoggedNavbar/LoggedNavbar";
import img1 from "../../assets/Rectangle 35.png";

const LoggedInMessage = () => {
  return (
    <>
      <LoggedNavbar />
      <div className="LoggedInMessage">
        <div className="LoggedInMessage_top">
          <div className="LoggedInMessage_heading">
            <p>Inbox :</p>
          </div>
        </div>
        <div className="LoggedInMessage_bot">
          <div className="LoggedInMessage_bot_left">
            <div className="LoggedInMessage_bot_left_img">
              <img src={img1} alt="" />
            </div>
            <div className="LoggedInMessage_bot_left_left">
              <div className="LoggedInMessage_bot_left_left_top">
                <p>Event Name</p>
                <input type="checkbox" />
              </div>
              <div className="LoggedInMessage_bot_left_left_med">
                <p>
                  Track campaign performance and see the direct impact of your
                  sponsorships.
                </p>
                <a href="">+23 Sponsor Requests</a>
                <p>₹5,000 - ₹25,000 </p>
              </div>
            </div>
          </div>
          <div className="LoggedInMessage_bot_left">
            <div className="LoggedInMessage_bot_left_img">
              <img src={img1} alt="" />
            </div>
            <div className="LoggedInMessage_bot_left_left">
              <div className="LoggedInMessage_bot_left_left_top">
                <p>Event Name</p>
                <input type="checkbox" />
              </div>
              <div className="LoggedInMessage_bot_left_left_med">
                <p>
                  Track campaign performance and see the direct impact of your
                  sponsorships.
                </p>
                <a href="">+23 Sponsor Requests</a>
                <p>₹5,000 - ₹25,000 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoggedInMessage;
