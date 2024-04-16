import ProfilePicture from "./ProfilePicture";
import AboutMe from "./AboutMe";
import MyInterests from "./MyIntrests";
import CurrentSwap from "./CurrentSwap";
import MySkills from "./MySkills";
import Frame from "./Frame";
import Saved from "./saves";
import "../myprofile/MyProfile.css";
import { Link } from "react-router-dom";
import svgsettings from "../assets/icons/settings.svg";
import { MdEdit } from "react-icons/md";
import Footer from "../footer/Footer.jsx";

const person = {
  name: "Elena",
  picture: "src/Assets/photo.png",
  skils: ["piano", "cooking", "Language"],
  about: "Been playing piano for 10 years ...",
  interests: ["music", "lenguage"],
};

const MyProfile = () => {
  return (
    <div>
      <nav className="icons">
        <Link to="/settings" style={{ color: "white" }}>
          <button>
            <img src={svgsettings} alt="" />
          </button>
        </Link>

        <button>
          <label htmlFor="profileU" className="picU">
            <MdEdit />
          </label>
        </button>
      </nav>

      <h1 className="page-title">My Profile </h1>

      <ProfilePicture picture={person.picture} />

      <MyInterests interest={person.interests} />

      <MySkills />

      <AboutMe description={person.about} name={"me"} />

      <Frame />

      <CurrentSwap />

      <Saved />

      <div className="headline headline-list">
        <Footer />
      </div>
    </div>
  );
};

export default MyProfile;
