import React from "react";

function Picture({ picture }) {
  const defaultPicture = "src/assets/icons/accounts.svg";
  return (
    <section className="pictureSection">
      <div className="pictureContainer">
        <img src={picture || defaultPicture} id="Pic" className="Pic" />
      </div>
    </section>
  );
}

export default Picture;
