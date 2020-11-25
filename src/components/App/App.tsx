import React from 'react';
import ReactDOM from 'react-dom';

import Header from '../Header';
import Content from '../Content';

import './App.scss';

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <Content />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
