import React, { useState } from "react";
import "./Chips.css";

const Chips = ({ skill, selected, onClick }) => {
  const [isSelected, setIsSelected] = useState(selected);

  const handleClick = () => {
    if (onClick) {
      onClick(skill);
    }
    setIsSelected(!isSelected);
  };

  return (
    <div
      className={`chips ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
    >
      {skill}
    </div>
  );
};

export default Chips;
