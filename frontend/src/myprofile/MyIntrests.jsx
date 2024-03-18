import React from "react";
const MyInterests = () => {

  const handleMyIntrestsData = (val) =>{
    const myIntrestsData = (val.target.value)
    console.log(myIntrestsData);
  }
  return ( 
    <section>
    <h3>My interests</h3>
    <div className='interestsData'>
    <input  onChange={handleMyIntrestsData} type="text" className="myIntrestsData"/>
    </div>
    </section>

   );
  }
 
export default MyInterests;

