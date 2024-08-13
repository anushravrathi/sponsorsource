import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { whyUsTop } from "../../assets/assets";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import img1 from "../../assets/miscellaneous_services.png";
import img2 from "../../assets/person_search.png";
import img3 from "../../assets/sentiment_very_satisfied.png";
import img4 from "../../assets/Rectangle32.png";
import "./ForCollege.css";
import SponsorOppor from "../../components/SponsorOppor/SponsorOppor";

const ForCollege = () => {
  return (
    <>
      <Navbar />
      <div className="forCollege">
        <div className="forCollege_top_heading">
          <p>How it works for organizers</p>
        </div>
        <div className="whyUs_top">
          <div className="whyus_para1">
            Publish your events and get sponsors
          </div>
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
                      <p className="why_top_container_slide_para2">
                        {item.para}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="for_College_bot">
          <div className="forCollege_bot_top">
            <p>Completely free to Use</p>
            <p>
              Sign up for a free account on SponsorMyEvents. There’s no cost to
              post your event.It costs nothing to register and post events in
              the SponsorMyEvents Marketplace. When you successfully sell a
              sponsorship, the secure transaction happens within the platform
              and both parties are protected. We deduct a 10% platform fee from
              the transaction.
            </p>
          </div>
          <div className="for_college_bot_bot">
            <div className="for_college_bot_bot_top">
              <div className="for_college_bot_bot_top_left">
                <img src={img2} alt="" />
                <p>Find Sponsors with Ease</p>
                <p>
                  Effortless Listing: Create detailed event profiles
                  highlighting your target audience, goals, and sponsorship
                  opportunities. <br /> Wide Reach: Gain access to a network of
                  pre-vetted sponsors actively seeking to support college
                  events. <br /> Streamlined Communication: Communicate directly
                  with interested sponsors through secure messaging within the
                  platform.
                </p>
              </div>
              <div className="for_college_bot_bot_top_right">
                <img src={img4} alt="" />
              </div>
            </div>
            <div className="for_college_bot_bot_med">
              <div className="for_college_bot_bot_top_left">
                <img src={img1} alt="" />
                <p>Manage Sponsorships Efficiently</p>
                <p>
                  Centralized Hub: Manage all sponsorship inquiries,
                  negotiations, and agreements in one convenient location.
                  <br /> Track Your Progress: Gain valuable insights into
                  sponsor interest and track the performance of your event
                  listing. <br /> Free Platform: There's no cost to list your
                  event on SponsorMyEvent. We only charge a 10% commission on
                  successfully secured sponsorships.
                </p>
              </div>
              <div className="for_college_bot_bot_top_right">
                <img src={img4} alt="" />
              </div>
            </div>
            <div className="for_college_bot_bot_bot">
              <div className="for_college_bot_bot_top_left">
                <img src={img3} alt="" />
                <p>Maximize Your Event Impact</p>
                <p>
                  Attract Bigger Sponsors: Showcase your events to brands
                  looking to connect with a highly engaged student audience.
                  Enhance Event Experiences: Secure funding to elevate your
                  event's production value and attract larger crowds. Boost Your
                  Club's Reputation: Partnering with established brands adds
                  credibility and prestige to your organization.
                </p>
              </div>
              <div className="for_college_bot_bot_top_right">
                <img src={img4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SponsorOppor />
      <Newsletter />
      <Footer />
    </>
  );
};

export default ForCollege;
