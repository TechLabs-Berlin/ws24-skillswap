import React from "react";
import svgplus from '../assets/icons/plus.svg';
import { useNavigate } from 'react-router-dom';




const MyInterests = () => {
  const navigate = useNavigate()



  
  const navigateToAddInterests = () => {
    navigate("/addInterests")
  };



  return ( 
    
    <section>
    
        <h3>My Interests (3 Of 5)</h3>
          <div className='Myinterests'>
              <button className="addButton" onClick={navigateToAddInterests} >
              <img src={svgplus} alt='plus icon'/>
              </button>
          </div>

    </section>

   );
  }
 
export default MyInterests;

