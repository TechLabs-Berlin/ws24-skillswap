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

let _person = {
  name: "Bjorn",
  skill: "Piano Lesson",
  picture: "src/Assets/icons/logo.png",
  skilss: ["piano", "cooking", "Language"],
  about:
    "“Bjorn here! Been playing piano for 10 years, mostly classical tunes. Love teaching others what I know and excited to pick up a new skill!”  ",
  interests: ["music", "lenguage"],
  skillLevel: "intermidiate",
  completedSwaps: 5,
  learningType: "online",
  distance: 3,
};

const HomePage = () => {
  const [person, setPerson] = useState(_person);
  const handlediscard = () => {
    //get another user with same interest
    //ovewrite the person data
    const NewPerson = {
      name: "Elena",
      skill: "Piano Lesson",
      picture: "src/Assets/icons/logo.png",
      skilss: ["piano", "cooking", "Language"],
      about: " I have been playing piano for 5 years.",
      interests: ["music"],
      skillLevel: "intermidiate",
      completedSwaps: 5,
      learningType: "remote",
      distance: 3,
    };
    setPerson(NewPerson);
  };
  // const [me, setMe] = useState({});
  // const [swapInfo, setSwapInfo] = useState({});
  // const [wantedSwaps, setWantedSwaps] = useState([]);

  // useEffect(() => {
  //   const fetchMe = () => {
  //     axios
  //       .get(
  //         "https://ws24-skillswap.onrender.com/api/users/65e07569ce88a79c6ccea9e3"
  //       )
  //       .then(function (response) {
  //         // handle success
  //         console.log(response);
  //         setMe(response.data);
  //         setWantedSwaps(response.data.skillsWanted);
  //       })
  //       .catch(function (error) {
  //         // handle error
  //         console.log(error);
  //       });
  //     // .finally(function () {
  //     //   // always executed
  //     // });
  //   };
  //   fetchMe();
  // }, []);

  // useEffect(() => {
  //   const fetchSwap = () => {
  //     axios
  //       .get(`https://ws24-skillswap.onrender.com/skills/api/${wantedSwaps[0]}`)
  //       .then(function (response) {
  //         console.log(response);
  //         setSwapInfo(response.data);
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //     // .finally(function () {
  //     //   // always executed
  //     // });
  //   };

  //   if (wantedSwaps && wantedSwaps.length > 0) {
  //     fetchSwap();
  //   }
  // }, [JSON.stringify(wantedSwaps)]);

  return (
    <>
      <div className="wholeScreen">
        <header>
          <h1 className="page-title">SkillSwap</h1>
        </header>
        <div className="info-container">
          <div className="information">
            <div className="profile">
              <Picture picture={person.picture} />
              {/* temporary Bjorn piano lesson */}
            </div>
            <div className="descritopn">
              <h2 className="person-skill">
                {person.name}-{person.skill}
              </h2>

              <AboutMe description={person.about} name={person.name} />
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
                    {person.completedSwaps} successful swaps completed
                  </div>
                  <div className="icons">
                    <img src={onlineIcon} alt="Learning prefrences icon" />
                    Perfers {person.learningType} learning
                  </div>
                </section>
              </div>
              <div className="button">
                <section>
                  <button onClick={() => handlediscard()}>
                    <img src={discardIcon} alt="Discard icon" />
                  </button>
                  <button onClick={() => handlediscard()}>
                    <img src={crossIcon} alt="cross icon" />
                  </button>
                  <button>
                    <img src={confirmIcon} alt=" Confirm icon" />
                  </button>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
