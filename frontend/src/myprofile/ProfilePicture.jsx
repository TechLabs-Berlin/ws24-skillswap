import React from 'react';


function ProfilePicture( {picture} ) {
    function profileUpdate() {
        const profilePic =document.getElementById("profilePic");
        const profileU =document.getElementById("profileU");
        profilePic.src =URL.createObjectURL(profileU.files[0]);
      };
    

    return(
        <section className="profileSection">
        <div className="profileContainer">
          <img src={picture} id='profilePic' className="profilePic"/>
        
          <label htmlFor="profileU" className="picU">edit</label>
      
         <input  type="file" accept='image/*' id='profileU' onChange={profileUpdate} className='profileU'/>
         
        </div>
       
      </section>

    )

}


export default ProfilePicture;






