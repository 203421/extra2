import React from 'react';
import SectionTitle from '../molecules/SectionTitle';
import SkillList from '../molecules/SkillList';

const SkillsSection = ({ title, skills, skills2, skills3, skills4 }) => {
  return (
    <div className="skills-section">
      <SectionTitle>{title}</SectionTitle>
      <div className="skills-section__divider">
        <div className='skills1' >
          <SkillList skills={skills} />
        </div>
        <div className='skills2' >
          <SkillList skills={skills2} />
        </div>
        <div className='skills3' >
          <SkillList skills={skills3} />
        </div>
        <div className='skills4' >
          <SkillList skills={skills4} />
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;