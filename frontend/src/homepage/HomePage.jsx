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
  return (
    <>
      <h1 className="page-title">SkillSwap</h1>
      <Picture picture={person.picture} />
      {/* temporary Bjorn piano lesson */}
      <h2 className="person-skill">
        {person.name}-{person.skill}
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
