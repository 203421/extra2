import React from 'react';
import CvTemplate from '../components/organisms/CvTemplates';

const CvPage = () => {
  const cvData = {
    
    headerTitle: 'Mauricio Dominguez',
    headerSrc: '/src/assets/image.jpg',
    name: 'Mauricio Dominguez',
    email: 'mauricioDV@gmail.com',
    phone: '+52 (963) 116-0244',
    imageSrc: '/path/to/profile-image.jpg',
    imageAlt: 'Profile Image',
    skillsTitle: 'Programing Skills',
    skills: ['JavaScript', 'HTML'],
    skills2: ['React', 'CSS'],
    skills3: ['Node.js', 'Python'],
    skills4: ['PHP', 'C++'],
    experience: [
      {
        position: 'Software Engineer',
        company: 'UPCiapas',
        startDate: '2021-08',
        endDate: '2022-08',
        description: 'Desarollo de aplicaciones web React and Node.js.',
      }
     
    ],
    education: [
      {
        degree: 'Ingenieria en Software',
        institution: 'Universidad Politecnica de Chiapas',
        startDate: '2021-08',
        endDate: 'Aun continua',
      },
    ],
  };

  return <CvTemplate data={cvData} />;
};

export default CvPage;
