import React from 'react';
import SectionTitle from '../molecules/SectionTitle';
import Text from '../../components/atoms/Text';

const EducationSection = ({ education }) => {
  return (
    <section>
      <SectionTitle>Education</SectionTitle>
      {education.map((edu, index) => (
        <div key={index}>
          <Text>{edu.degree} - {edu.institution}</Text>
          <Text>{edu.startDate} - {edu.endDate}</Text>
        </div>
      ))}
    </section>
  );
};

export default EducationSection;
