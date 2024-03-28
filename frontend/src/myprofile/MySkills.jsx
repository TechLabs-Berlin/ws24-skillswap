import React from 'react';
import { useState } from 'react';
import { Multiselect } from "multiselect-react-dropdown";
import svgplus from '../assets/icons/plus.svg';
import svgcooking from '../assets/icons/cooking.svg';

const MySkills = () => { 

  const data =[
    {skill:"skill1" ,id:1},
    {skill:"skill2" ,id:2},
    {skill:"skill3" ,id:3},
  
  ]

  const [options] = useState(data);
  const [toggleSkill, setToggleSkill ] = useState(false);

  const saveSkills = (text)=> { 
    console.log("print: " , text);
  }


  return(
    <section className='mySkills'>
    <h3>My skills</h3>
    <div className="contain">
    <button className='plusButton' onClick={()=>setToggleSkill(!toggleSkill)}>
      <img src={svgplus} alt='plus icon'/>
    </button>
    <img src={svgcooking} alt="cooking icon" />
    </div>
     
    {toggleSkill &&  <div className="skillSection">
        <Multiselect options = {options} displayValue='skill'/>
        <button onClick={()=>saveSkills("saved skills")}>save</button>
    </div>    } 

  </section>
  )


}

export default MySkills;