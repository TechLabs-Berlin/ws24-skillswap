import React from "react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Swappage.css";
import Congrats from "./Congrats";
import { useNavigate } from "react-router-dom";
//import { useHistory } from "react-router-dom";
import backIcon from "../assets/icons/backIcon.svg";
import vector from "../assets/icons/vector.svg";
import Piano from "../assets/icons/Piano.svg";
import Gardening from "../assets/icons/Gardening .svg";
import cooking from "../assets/icons/cooking.svg";
import Drawing from "../assets/icons/Drawing.jpg";
import Footer from "../footer/Footer.jsx";
const skillPictures = {
  Gardening: Gardening,
  Piano: Piano,
  Cooking: cooking,
  Drawing: Drawing,
};

const Swappage = () => {
  const location = useLocation();
  const [userData, setUserData] = useState({});
  const [receiverId, setReceiverId] = useState({});
  const [skillWanted, setSkillWanted] = useState("");
  const [skillOffered, setSkillOffered] = useState("");
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const receiverId = params.get("id");
    setReceiverId(receiverId);

    const fetchData = async () => {
      try {
        const userDataResponse = await fetch(
          "https://ws24-skillswap.onrender.com/api/users/" + receiverId
        );
        if (!userDataResponse.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonUserData = await userDataResponse.json();
        setUserData(jsonUserData);
        const skillsData = await fetch(
          "https://ws24-skillswap.onrender.com/api/skills/"
        );
        if (!skillsData.ok) {
          throw new Error("Network response was not ok");
        }

        const jsonSkillsData = await skillsData.json();

        const skillsOfferedById = jsonUserData.skillsOffered;
        const skillsWantedById = jsonUserData.skillsWanted;

        const [{ name: skillOffered }] = jsonSkillsData.filter((skill) => {
          return skill._id === skillsOfferedById[0];
        });
        setSkillOffered(skillOffered);

        const [{ name: skillWanted }] = jsonSkillsData.filter((skill) => {
          return skill._id === skillsWantedById[0];
        });
        setSkillWanted(skillWanted);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const postChatDataToServer = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        " https://ws24-skillswap.onrender.com/api/messages/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            senderId: "660e9b92453cad62e9a4f568",
            receiverId: receiverId,
            text: inputValue,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      if (response.status === 201) {
        console.log("submitted data to BE successfully!!");
      }
      navigate(
        "/homepage?" + new URLSearchParams({ chatSent: true }).toString()
      );
      handleChatRequestSent();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const [isChatRequestSent, setIsChatRequestSent] = useState(false);
  const handleChatRequestSent = () => {
    setIsChatRequestSent(true);
  };

  return (
    <>
      <section className="swap-page">
        <header className="swap-header">
          <Link to="/homepage">
            <img src={backIcon} id="back-button" alt="Back" />
          </Link>
          <h1>SkillSwap</h1>
        </header>
        <div id="swapping-page">
          <div className="swap-container">
            <div className="profile-images">
              <div className="user-profile">
                <div>
                  <img
                    src={skillPictures[skillWanted]}
                    alt={skillWanted.toLowerCase()}
                    className="skill-pic"
                  />
                </div>
                <p>{skillWanted}</p>
              </div>
              <div className="exchange-icon">
                <img src={vector} alt="Exchange" />
              </div>
              <div className="my-profile">
                <div>
                  <img
                    src={skillPictures[skillOffered]}
                    alt={skillOffered.toLowerCase()}
                    className="skill-pic"
                  />
                </div>
                <p>{skillOffered}</p>
              </div>
            </div>
          </div>
          <div className="swap-text">
            <p id="text">
              YOU CAN SEND {userData.username} A CHAT
              <br />
              REQUEST AND ONCE THEY ACCEPTED, YOU <br />
              CAN CHAT
            </p>
          </div>

          <div className="chatbox">
            <textarea
              placeholder="Write your message here"
              id="msg-box"
              value={inputValue}
              onChange={handleChange}
            ></textarea>

            <button
              id="chat-request"
              onClick={(event) => postChatDataToServer(event)}
            >
              Send chat request
            </button>
          </div>
        </div>
        <div className="headline headline-list">
          <Footer />
        </div>
      </section>
      {isChatRequestSent && (
        <Congrats onCloseClick={() => setIsChatRequestSent(false)} />
      )}
    </>
  );
};

export default Swappage;
