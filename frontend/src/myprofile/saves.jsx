import React from "react";
import svggardning from '../assets/icons/gardning.svg';
import svgsewing from '../assets/icons/sewing.svg';
import svgsewing2 from '../assets/icons/sewing2.svg';
import '../myprofile/MyProfile.css'

const Saved = () => {
  return (
    <section>
      <h3 id="H3">Saved (10)</h3>
      <a href="www.google.com" className="seeAll">See All</a>

   
     
      
      <div className="saved">
    
          <img src={svggardning} alt="gardening button" className="icon"/>
   
     
          <img src={svgsewing} alt="sewing button"  />
  
    
          <img src={svgsewing2} alt="sewing button 2"  />
       
      </div>
    </section>
  );
};

export default Saved;