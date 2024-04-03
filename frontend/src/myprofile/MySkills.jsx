import React from 'react';
import { useNavigate } from 'react-router-dom';
import svgplus from '../assets/icons/plus.svg';
import svgcooking from '../assets/icons/cooking.svg';

const MySkills = () => {
  const navigate = useNavigate()

  const data =[
    {skill:"skill1" ,id:1},
    {skill:"skill2" ,id:2},
    {skill:"skill3" ,id:3},
  ]

  const navigateToSearch = () => {
    navigate("/search")
  };

  return(
    <section className='mySkills'>
    <h3>My skills</h3>
    <div className="contain">
    <button className='plusButton' onClick={navigateToSearch}>
      <img src={svgplus} alt='plus icon'/>
    </button>
    <img src={svgcooking} alt="cooking icon" />
    </div>


  </section>
  )


}

export default MySkills;