import React from "react";
import "./Congrats.css";

function Congrats({ onCloseClick }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={onCloseClick}>
          &times;
        </span>
        <div className="popup-text">
          <h3> Congratulations!!</h3>
          <p>
            Your request message has been
            <br />
            sent Successfully
          </p>
        </div>
      </div>
    </div>
  );
}

export default Congrats;
