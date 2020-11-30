import React from 'react';

import Header from '../Header';
import Content from '../Content';

import styles from './App.module.scss';

const App: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Content />
    </div>
  );
};

export default App;
