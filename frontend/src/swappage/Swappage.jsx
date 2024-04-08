import React from "react";
//import "./Swappage.css";
//import { useHistory } from "react-router-dom";
import backIcon from "../assets/icons/backIcon.svg";
import piano1 from "../assets/icons/piano1.svg";
import vector from "../assets/icons/vector.svg";
import cooking from "../assets/icons/cooking1.svg";
const Swappage = () => {
  // const history = useHistory();
  // const handleGoBack = () => {
  //   history.goBack("/HomePage"); // Go back to the previous page
  // };
  return (
    <>
      <div className="swap-page">
        <header className="swap-header">
          <button className="back-button">
            <img src={backIcon} alt="Back" />
          </button>
          <h1>SkillSwap</h1>
        </header>

        <div className="swap-container">
          <div className="profile-pictures">
            <div className="userprofile">
              <img src={piano1} alt="User Skill" />
              <p>Piano</p>
            </div>
            <div className="exchange-icon">
              <img src={vector} alt="Exchange" />
            </div>
            <div className="my-profile">
              <img src={cooking} alt="My Skill" />
              <p>Cooking</p>
            </div>
          </div>
        </div>
        <div className="swap-text">
          <p>
            YOU CAN SEND BJORN A CHAT REQUEST AND ONCE THEY ACCEPTED, YOU CAN
            CHAT
          </p>
        </div>

        <div>
          <input
            type="text"
            placeholder="Write your message here"
            id="msg-box"
          />
          <button id="chat-request">Send chat request</button>
        </div>
      </div>
    </>
  );
};

export default Swappage;
