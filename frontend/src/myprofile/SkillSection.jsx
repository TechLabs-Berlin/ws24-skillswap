import React from 'react';
import { useState } from 'react';
import {Multiselect} from "multiselect-react-dropdown";

const MySkills = () => { 

  const data =[
    {skill:"skill1" ,id:1},
    {skill:"skill2" ,id:2},
    {skill:"skill3" ,id:3},
  
  ]

  const [options] = useState(data);


  return(
    <section>
    <h3>My skills</h3>
    <div className="skillSection">
        <Multiselect options = {options} displayValue='skill'/>
    </div>   
  </section>
  )


}

export default MySkills;
