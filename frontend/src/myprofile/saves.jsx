import React from "react";
import svggardning from '../assets/icons/gardning.svg';
import svgsewing from '../assets/icons/sewing.svg';
import svgsewing2 from '../assets/icons/sewing2.svg';
import '../myprofile/MyProfile.css'

const Saved = () => {
  return (
    <section>
      <h3>Saved (10)</h3>
      <div className="saved">
        <button className="saved-button">
          <img src={svggardning} alt="gardening button" />
        </button>
        <button className="saved-button">
          <img src={svgsewing} alt="sewing button" />
        </button>
        <button className="saved-button">
          <img src={svgsewing2} alt="sewing button 2" />
        </button>
      </div>
    </section>
  );
};

export default Saved;