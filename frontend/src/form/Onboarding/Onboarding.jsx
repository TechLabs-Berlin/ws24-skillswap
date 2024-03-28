import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Chips from './Chips';

const Onboarding = () => {
  const [skills, setSkills] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const response = await axios.get('https://ws24-skillswap.onrender.com/api/skills');
      setSkills(response.data);
    } catch (error) {
      console.error('Error fetching skills:', error);
    }
  };

  const toggleSkillSelection = (skill) => {
    const skillIndex = selectedSkills.findIndex((s) => s._id === skill._id);
    if (skillIndex === -1) {
      setSelectedSkills([...selectedSkills, skill]);
    } else {
      const updatedSelectedSkills = [...selectedSkills];
      updatedSelectedSkills.splice(skillIndex, 1);
      setSelectedSkills(updatedSelectedSkills);
    }
  };

  const handleContinue = () => {
    // Send selectedSkills to backend
    console.log('Selected skills:', selectedSkills);
  };

  return (
    <div>
      <h1>Onboarding</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {skills.map((skill) => (
          <Chips
            key={skill._id}
            skill={skill}
            selected={selectedSkills.some((s) => s._id === skill._id)}
            onClick={toggleSkillSelection}
          />
        ))}
      </div>
      <button onClick={handleContinue}>Continue</button>
    </div>
  );
};

export default Onboarding;
