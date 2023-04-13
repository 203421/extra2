import React from 'react';
import Header from './Header';
import ProfileSection from './ProfileSection';
import SkillsSection from './SkillsSection';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import Navbar from './Navbar';

const CvTemplate = ({ data }) => {
  return (
    <div className="cv-template">
      <Navbar title={data.headerTitle} />
      <Header title={data.headerTitle} src={data.headerSrc} />
      <ProfileSection
        name={data.name}
        email={data.email}
        phone={data.phone}
        imageSrc={data.imageSrc}
        imageAlt={data.imageAlt}
      />
      <SkillsSection title={data.skillsTitle} skills={data.skills} skills2={data.skills2} 
                                              skills3={data.skills3} skills4={data.skills4} />
      <div className='exp-edu'>
        <ExperienceSection experience={data.experience} />
        <EducationSection education={data.education} />
      </div>
    </div>
  );
};

export default CvTemplate;
