import React from "react";

const AboutMe = ({ description, name }) => {
  const handleAboutMe = (val) => {
    const aboutData = val.target.value;
    // data from about me in textarea
  };
  return (
    <section className="aboutSec">
      <h3>About {name}</h3>
      <div>
        {name === "me" ? (
          <input
            onChange={handleAboutMe}
            name="aboutMe"
            id="aboutMe"
            className="aboutMe"
            defaultValue={description}
          />
        ) : (
          <p className="homePageAboutSec">{description}</p>
        )}
      </div>
    </section>
  );
};

export default AboutMe;
