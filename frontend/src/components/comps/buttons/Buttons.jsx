import React from 'react';
import './Buttons.css'; // Import the CSS file

const Buttons = ({ onClick, children }) => {
  return <button className="button" onClick={onClick}>{children}</button>;
};

export default Buttons;
