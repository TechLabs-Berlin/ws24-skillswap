import React, { useState } from 'react';
import './Chips.css';

const Chips = ({ skill, selected, onClick }) => {
  const handleClick = () => {
    onClick(skill);
  };

  return (
    <div
      className={`chips ${selected ? 'selected' : ''}`}
      onClick={handleClick}
    >
      {skill.name}
    </div>
  );
};

export default Chips;
