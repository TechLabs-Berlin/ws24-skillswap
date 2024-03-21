import React from 'react';


function Picture({ picture }) {


  return (
    <section className="pictureSection">
      <div className="pictureContainer">
        <img src={picture} id='Pic' className="Pic" />
      </div>

    </section>

  )

}


export default Picture;
