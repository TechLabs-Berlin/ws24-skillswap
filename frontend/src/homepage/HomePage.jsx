import Picture from "./Picture";
import AboutMe from "./AboutMe";
import "./HomePage.css";
import loctionIcon from "../assets/icons/location.svg";
import skillLevelIcon from "../assets/icons/star.svg";
import completedSwapsIcon from "../assets/icons/swaps.svg";
import onlineIcon from "../assets/icons/online.svg";
import refreshIcon from "../assets/icons/refresh.svg";
import crossIcon from "../assets/icons/cross.svg";
import confirmIcon from "../assets/icons/confirm.svg";
//import axios from "axios";
//import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Congrats from "../swappage/Congrats";
import Footer from "../footer/Footer.jsx";

const HomePage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [person, setPerson] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [skillName, setSkillName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://ws24-skillswap.onrender.com/api/skillswap/660e8f412877b7ef70c85ed4"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
        setPerson(jsonData?.matches?.[currentIndex]);

        const skillId =
          jsonData?.matches?.[currentIndex]?.matchingSkills?.ownSkillOffered;
        console.log("Skill ID", skillId);

        if (skillId) {
          const skillResponse = await fetch(
            `https://ws24-skillswap.onrender.com/api/skills/${skillId}`
          );
          if (skillResponse.ok) {
            const skillData = await skillResponse.json();
            setSkillName(skillData.name);
          }
        }
      } catch (error) {
        console.log("error", error);
      }
    };

    // Only fetch data if it hasn't been fetched yet
    if (!data) {
      fetchData();
    }
  }, [data, currentIndex]); // Fetch data when data or currentIndex changes

  const handleNextMatch = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === data?.matches?.length - 1 ? 0 : currentIndex + 1
    );
    setPerson(data?.matches?.[currentIndex + 1] || data?.matches?.[0]);
  };

  if (!person) {
    return <div>Loading...</div>;
  }

  const handleConfirm = (id) => {
    const queryParams = { id: id };
    navigate("/swappage?" + new URLSearchParams(queryParams).toString());
  };
  const queryParams = new URLSearchParams(window.location.search);
  const isChatRequestSent = queryParams.get("chatSent");

  const handleCloseCongrats = () => {
    navigate("/homepage"); // Navigate back to the homepage
  };

  return (
    <>
      <div className="wholeScreen">
        <header className="home-header">
          <h1 className="page-title">SkillSwap</h1>
        </header>
        <div className="info-container">
          <div className="information">
            <div className="userprofile">
              <Picture picture={person.picture} />
            </div>
            <div className="descritopn">
              <h2 className="person-skill">
                {person.username}-{skillName}
              </h2>

              <AboutMe
                description={person.description}
                name={person.username}
              />
              <div className="swaper-info">
                <section>
                  <div className="icons">
                    <img src={loctionIcon} alt="loction Icon" />
                    {person.distance} km away from you
                  </div>
                  <div className="icons">
                    <img src={skillLevelIcon} alt="skillLevelIcon" />
                    {person.skillLevel}
                  </div>
                  <div className="icons">
                    <img src={completedSwapsIcon} alt="completed Swaps" />
                    {person.completedSkillSwaps} successful swaps completed
                  </div>

                  <div className="icons">
                    <img src={onlineIcon} alt="Learning prefrences icon" />
                    Perfers {person.swapPreference} learning
                  </div>
                </section>
              </div>
              <div className="home-btn">
                <section>
                  <button id="home-btn" onClick={handleNextMatch}>
                    <img src={refreshIcon} alt="Refresh icon" />
                  </button>
                  <button id="home-btn" onClick={handleNextMatch}>
                    <img src={crossIcon} alt="cross icon" />
                  </button>

                  <button
                    id="home-btn"
                    onClick={() => handleConfirm(person._id)}
                  >
                    <img src={confirmIcon} alt="" />
                  </button>
                </section>
              </div>
            </div>
          </div>
        </div>
        {isChatRequestSent && <Congrats onCloseClick={handleCloseCongrats} />}
        <div className="headline headline-list">
          <Footer />
        </div>
      </div>
    </>
  );
};
export default HomePage;
