import React from 'react';
import Skill from '../atoms/Skill';
import Text from '../atoms/Text';

const SkillList = ({ skills,  }) => {
  return (
    <ul className="skill-list">
      {skills.map((skill, index) => (
        <li key={index} className="skill-list-item">
          <Skill skill={skill} />
       
        </li>
      ))}
      
    </ul>
  );
};

export default SkillList;