import React from 'react';
import Title from '../atoms/Tittle.jsx';

const SectionTitle = ({ children }) => {
  return <Title className="section-title">{children}</Title>;
};

export default SectionTitle;
