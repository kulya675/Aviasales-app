import React from 'react';

import logo from './Logo.svg';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <img src={logo} alt="Aviasales" />
    </header>
  );
};

export default Header;
