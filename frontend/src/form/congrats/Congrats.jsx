import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Congrats.css'; 
import Buttons from "../../components/comps/buttons/Buttons";

const Congrats = () => {
  const navigate = useNavigate(); 

  const handleProfileClick = () => {
    
    navigate('/myprofile'); 
  };

  return (
    <div className="congrats-container">
      <h1 className="heading-text">Congrats!</h1>
      <h3 className="body-text">you're succesfully registered! <br /> <br /> <br /></h3>
      {/* <img src="congrats.png" alt="Congrats Image" className="congrats-image" /> */}
      <Buttons className="profile-button" onClick={handleProfileClick}>Take me to my profile</Buttons>
    </div>
  );
};

export default Congrats;
