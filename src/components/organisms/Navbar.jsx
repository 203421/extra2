import React from 'react';
import NavbarItem from '../molecules/NavbarItem';
import Title from '../atoms/Tittle';

const Navbar = () => {
  return (
    
    <nav className="navbar">
      <div className="navbar-left">
        <NavbarItem text="Universidad Politecnica de Chiapas" />
      </div>
      <div className="navbar-right">
        <Title className="navbar-right__title">MI CV</Title>
      </div>
    </nav>

  );    
};

export default Navbar;