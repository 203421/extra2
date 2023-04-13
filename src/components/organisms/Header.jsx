import React from 'react';
import Title from '../atoms/Tittle';
import Image from '../atoms/Image';
import Text from '../atoms/Text';

const Header = ({ title, src }) => {
  return (
    <header className='header'>
      <div>
        <Title className="header-title">{title}</Title>
        <Image className="header-image" src={src} alt="header" />
      </div>
      <div>
        <Text className="header-text">¡Hola! Mi nombre es Mauricio y soy un estudiante de ingeniería en software con una gran pasión por la tecnología y el desarrollo de software. Desde que era joven, siempre he estado interesado en la informática y he disfrutado explorando diferentes lenguajes de programación y herramientas de desarrollo.
        Como estudiante de ingeniería en software, he tenido la oportunidad de trabajar en proyectos individuales y en equipo, lo que me ha permitido mejorar mi capacidad para trabajar en un ambiente colaborativo y comunicar mis ideas de manera efectiva. Estoy emocionado por trabajar en nuevos proyectos y aprender de los profesionales del campo.</Text>
      </div>
    </header>
  );
};

export default Header;
