import React from 'react';

import styles from './Tab.module.scss';

const Tab: React.FC = () => {
  return (
    <nav className={`${styles.tickets__tab} ${styles.tab}`}>
      <ul className={styles.tab__list}>
        <li className={`${styles.tab__item} ${styles['tab__item-active']}`}>самый дешевый</li>
        <li className={styles.tab__item}>самый быстрый</li>
      </ul>
    </nav>
  );
};

export default Tab;
