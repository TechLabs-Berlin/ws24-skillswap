import Picture from "./Picture";
import AboutMe from "./AboutMe";
import "./HomePage.css";
import loctionIcon from "../assets/icons/location.png";
import skillLevelIcon from "../assets/icons/star.png";
import completedSwapsIcon from "../assets/icons/swaps.png";
import onlineIcon from "../assets/icons/online.png";
import discardIcon from "../assets/icons/discard.png";
import crossIcon from "../assets/icons/cross.png";
import confirmIcon from "../assets/icons/confirm.png";
import axios from "axios";
import { useEffect, useState } from "react";

const person = {
  name: "Bjorn",
  skill: "Piano Lesson",
  picture: "src/Assets/icons/logo.png",
  skilss: ["piano", "cooking", "Language"],
  about: "Been playing piano for 10 years ...",
  interests: ["music", "lenguage"],
  skillLevel: "intermidiate",
  completedSwaps: 5,
  learningType: "online",
  distance: 3,
};

const HomePage = () => {
  const [me, setMe] = useState({});
  const [swapInfo, setSwapInfo] = useState({});
  const [wantedSwaps, setWantedSwaps] = useState([]);

  useEffect(() => {
    const fetchMe = () => {
      axios
        .get(
          "https://ws24-skillswap.onrender.com/api/users/65e07d4e79299bba4480d73a"
        )
        .then(function (response) {
          // handle success
          console.log(response);
          setMe(response.data);
          setWantedSwaps(response.data.skillsWanted);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
      // .finally(function () {
      //   // always executed
      // });
    };
    fetchMe();
  }, []);

  useEffect(() => {
    const fetchSwap = () => {
      axios
        .get(`https://ws24-skillswap.onrender.com/skills/api/${wantedSwaps[0]}`)
        .then(function (response) {
          // handle success
          console.log(response);
          setSwapInfo(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
      // .finally(function () {
      //   // always executed
      // });
    };
    console.log("hello", wantedSwaps);
    if (wantedSwaps && wantedSwaps.length > 0) {
      console.log("hey");
      fetchSwap();
    }
  }, [JSON.stringify(wantedSwaps)]);

  return (
    <>
      <h1 className="page-title">SkillSwap</h1>
      <Picture picture={person.picture} />
      {/* temporary Bjorn piano lesson */}
      <h2 className="person-skill">
        {person.name}-{swapInfo.name}
      </h2>

      <AboutMe description={person.about} name={person.name} />
      <section>
        <div>
          <img src={loctionIcon} alt="loction Icon" />
          {person.distance} km away from you
        </div>
        <div>
          <img src={skillLevelIcon} alt="skillLevelIcon" />
          {person.skillLevel}
        </div>
        <div>
          <img src={completedSwapsIcon} alt="completed Swaps" />
          {person.completedSwaps} successful swaps completed
        </div>
        <div>
          <img src={onlineIcon} alt="Learning prefrences icon" />
          Perfers {person.learningType} learning
        </div>
      </section>
      <section>
        <button>
          <img src={discardIcon} alt="Discard icon" />
        </button>
        <button>
          <img src={crossIcon} alt="cross icon" />
        </button>
        <button>
          <img src={confirmIcon} alt=" Confirm icon" />
        </button>
      </section>
    </>
  );
};
export default HomePage;
