import React from 'react';

import logo from './Logo.svg';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Aviasales" />
    </header>
  );
};

export default Header;
