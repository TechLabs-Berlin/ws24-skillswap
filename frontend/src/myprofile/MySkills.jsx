import React from 'react';
import { useNavigate } from 'react-router-dom';
import svgplus from '../assets/icons/plus.svg';

import { useAuth } from "../context/SkillsContext.jsx";

const MySkills = () => {
  const navigate = useNavigate()

  const data =[
    {skill:"skill1" ,id:1},
    {skill:"skill2" ,id:2},
    {skill:"skill3" ,id:3},
  ]
  const {skills} = useAuth();

  const navigateToSkills = () => {
    navigate("/Skills")
  };

  return(
    <section className='mySkills'>
    <h3>My skills</h3>
      {skills?.map(item => (
          <div style={{ padding: '10px' }} key={item.id}>
            <button>
              {item.name}
            </button>
          </div>
      ))}
    <div className="contain">
    <button className='plusButton' onClick={navigateToSkills}>
      <img src={svgplus} alt='plus icon'/>
    </button>
   
    </div>


  </section>
  )


}

export default MySkills;
