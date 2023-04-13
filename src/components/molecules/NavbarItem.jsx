import React from 'react';
import Logo from '../atoms/Logo';
import Title from '../atoms/Tittle';

const NavbarItem = ({ text }) => {
  return (
    <div className="navbar-item">
        <Logo className="navbar-item__logo" />
        <Title className="navbar-item__title">{text}</Title>
    </div>
  );
};

export default NavbarItem;