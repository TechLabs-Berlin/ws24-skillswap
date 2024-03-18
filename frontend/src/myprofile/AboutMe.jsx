import React from "react";

const AboutMe=()=>{
   
      const handleAboutMe=(val)=>{
        const aboutData =(val.target.value);
          // data from about me in textarea
      }
      return(
        <section className='aboutSec'>
        <h3>About me</h3>
        <div>
          <input onChange={handleAboutMe} name="aboutMe" id="aboutMe" className='aboutMe' />
          </div>
      </section>
      )
  }
  


export default AboutMe;