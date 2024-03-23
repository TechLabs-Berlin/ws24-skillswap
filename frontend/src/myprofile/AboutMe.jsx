import React from "react";

const AboutMe = ({ description }) => {
  const handleAboutMe = (e) => {
    const aboutData = e.target.value;
  };

  return (
    <section className='aboutSec'>
      <h3>About me</h3>
      <div>
      <textarea onChange={handleAboutMe} name="aboutMe" id="aboutMe" className='aboutMe' defaultValue={description}/>
      </div>
    </section>
  );
};

export default AboutMe;



