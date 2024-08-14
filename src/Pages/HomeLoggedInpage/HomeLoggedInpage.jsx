import React from "react";
import "./HomeLoggedInpage.css";
import LoggedNavbar from "../../components/LoggedNavbar/LoggedNavbar";
import img1 from "../../assets/Rectangle 35.png";
import { Link } from "react-router-dom";
import { performance } from "../../assets/assets";

const HomeLoggedInpage = () => {
  return (
    <>
      <LoggedNavbar />
      <div className="HomeLoggedInpage">
        <div className="HomeLoggedInpage_top">
          <div className="HomeLoggedInpage_top_top">
            <p>My Events :</p>
            <div className="HomeLoggedInpage_top_top_right">
              <Link to={"/editProfile"}>
                <p>Edit Profile</p>
              </Link>
            </div>
          </div>
          <div className="HomeLoggedInpage_top_bot">
            <div className="HomeLoggedInpage_top_bot_left">
              <div className="HomeLoggedInpage_top_bot_left_img">
                <img src={img1} alt="" />
              </div>
              <div className="HomeLoggedInpage_top_bot_left_details">
                <div className="logged_name_event">
                  <p>Event Name</p>
                  <input
                    type="checkbox"
                    className="checkbox-container"
                    name=""
                    id=""
                  />
                </div>
                <p className="track_logged">
                  Track campaign performance and see the direct impact of your
                  sponsorships.
                </p>
                <p className="LoggedIn_price">₹5,000 - ₹25,000 </p>
              </div>
            </div>
            <Link>
              <div className="HomeLoggedInpage_top_bot_right">
                <div className="HomeLoggedInpage_top_bot_right_img">
                  {/* <img src={img1} alt="" /> */}
                  <i class="fa-solid fa-plus"></i>
                </div>
                <div className="HomeLoggedInpage_top_bot_right_details">
                  <p>Create Event</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="HomeLoggedInpage_bot">
          <div className="HomeLoggedInpage_bot_top">
            <div className="HomeLoggedInpage_bot_top_heading">
              <p>Performance :</p>
            </div>
          </div>
          <div className="HomeLoggedInpage_bot_bot">
            <div className="HomeLoggedInpage_bot_bot_container">
              <ul>
                {performance.map((item, index) => {
                  return (
                    <li>
                      <div className="HomeLoggedInpage_bot_bot_container_slide">
                        <p className="performance_numver">{item.number}</p>
                        <div className="homeLoggedInPage_bot_bot_cotnainer_paras">
                          <p className="HomeLoggedInpage_bot_bot_container_para">
                            {item.para1}
                          </p>
                          <p className="HomeLoggedInpage_bot_bot_container_para2">
                            {item.para2}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeLoggedInpage;
