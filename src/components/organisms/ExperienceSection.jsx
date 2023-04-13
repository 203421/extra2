import React from 'react';
import SectionTitle from '../molecules/SectionTitle';
import Text from '../atoms/Text';

const ExperienceSection = ({ experience }) => {
  return (
    <section>
      <SectionTitle>Experience</SectionTitle>
      {experience.map((exp, index) => (
        <div key={index}>
          <Text>{exp.position} - {exp.company}</Text>
          <Text>{exp.startDate} - {exp.endDate}</Text>
          <Text>{exp.description}</Text>
        </div>
      ))}
    </section>
  );
};

export default ExperienceSection;
