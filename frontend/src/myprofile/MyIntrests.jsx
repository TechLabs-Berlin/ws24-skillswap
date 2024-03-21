import React from "react";
const MyInterests = ({ interest}) => {

  const handleMyIntrestsData = (val) =>{
    const myIntrestsData = (val.target.value)
    console.log(myIntrestsData);
  }
  return ( 
    <section>
    <h3>My interests</h3>
    <div className='interestsData'>
    <input  onChange={handleMyIntrestsData} type="text" className="myIntrestsData" defaultValue={interest.forEach(element => ', ' + element)}/>
    </div>
    </section>

   );
  }
 
export default MyInterests;

