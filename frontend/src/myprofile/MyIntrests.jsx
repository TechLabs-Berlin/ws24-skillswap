import React from "react";
import svgplus from '../assets/icons/plus.svg';




const MyInterests = ({ description }) => {

  const handleMyIntrestsData = (val) =>{
    const myIntrestsData = (val.target.value)
    console.log(myIntrestsData);
  }
  return ( 
    
    <section>
    
    <h3>My Interests (3 Of 5)</h3>
    <div className='Myinterests'>
    <button onChange={handleMyIntrestsData} type="text" defaultValue={description} className="addButton" >
    
   
    <img src={svgplus} alt='plus icon'/>
 
    </button>
   
   
    </div>
    </section>

   );
  }
 
export default MyInterests;


// {interest.forEach(element => ', ' + element)}
