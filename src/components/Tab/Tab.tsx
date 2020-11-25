import React from 'react';

import './Tab.scss';

const Tab: React.FC = () => {
  return (
    <nav className="tickets__tab tab">
      <ul className="tab__list">
        <li className="tab__item tab__item-active">самый дешевый</li>
        <li className="tab__item">самый быстрый</li>
      </ul>
    </nav>
  );
};

export default Tab;
