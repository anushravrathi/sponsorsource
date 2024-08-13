import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Newsletter/Newsletter";
import img1 from "../../assets/miscellaneous_services.png";
import img2 from "../../assets/person_search.png";
import img3 from "../../assets/sentiment_very_satisfied.png";
import img4 from "../../assets/Rectangle32.png";
import { whyUsBot } from "../../assets/assets";
import SponsorOppor from "../../components/SponsorOppor/SponsorOppor";
import "./ForSponsorbutton.css";

const ForSponsorbutton = () => {
  return (
    <>
      <Navbar />
      <div className="forSponsorButton">
        <div className="forCollegeSponsorButton_heading">
          <p>How it works for sponsors</p>
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
            <p>Totally FREE for Sponsors</p>
            <p>
              There’s no cost to join SponsorMyEvents and as a member, you’ll
              have full access to search the Marketplace. When you find an event
              to sponsor, you’ll only pay the advertised event’s sponsorship
              cost. We don’t add any additional fees to your transaction as a
              sponsor.
            </p>
          </div>
          <div className="for_college_bot_bot">
            <div className="for_college_bot_bot_top">
              <div className="for_college_bot_bot_top_left">
                <img src={img2} alt="" />
                <p>Target the Perfect Audience</p>
                <p>
                  Detailed Search: Filter through a diverse range of college
                  events based on location, demographics, and category. <br />{" "}
                  Direct Contact: Connect directly with event organizers through
                  secure messaging within the platform. <br /> Targeted
                  Investment: Reach highly engaged college students perfectly
                  aligned with your brand.
                </p>
              </div>
              <div className="for_college_bot_bot_top_right">
                <img src={img4} alt="" />
              </div>
            </div>
            <div className="for_college_bot_bot_med">
              <div className="for_college_bot_bot_top_left">
                <img src={img1} alt="" />
                <p>Boost Brand Awareness</p>
                <p>
                  Increase Campus Visibility: Secure prominent sponsorship
                  placements at events with high student attendance. <br />{" "}
                  Engage with Future Consumers: Build brand loyalty and positive
                  associations among potential future customers. <br /> Multiple
                  Sponsorship Options: Choose the sponsorship package that best
                  suits your marketing goals and budget.
                </p>
              </div>
              <div className="for_college_bot_bot_top_right">
                <img src={img4} alt="" />
              </div>
            </div>
            <div className="for_college_bot_bot_bot">
              <div className="for_college_bot_bot_top_left">
                <img src={img3} alt="" />
                <p>Measure Your ROI</p>
                <p>
                  Track Performance: Monitor the reach and engagement generated
                  by your event sponsorships. <br /> Gain Valuable Insights:
                  Analyze data to measure the effectiveness of your sponsorship
                  campaigns. <br /> Free Platform Access: There's no cost to
                  browse sponsorship opportunities on SponsorMyEvent. We only
                  take a 10% commission from the final sponsorship amount
                  processed.
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

export default ForSponsorbutton;
