import React from 'react';

import logo from './logo.png';
import './Ticket.scss';

const Ticket: React.FC = () => {
  return (
    <div className="tickets__ticket ticket">
      <div className="ticket__head head">
        <span className="head__price">13 400 Р</span>
        <img className="head__logo" src={logo} alt="S7 logo" />
      </div>
      <ul className="ticket__info info">
        <li className="info__item">
          <span className="info__description">MOW – HKT</span>
          <span className="info__text">10:45 – 08:00</span>
        </li>
        <li className="info__item">
          <span className="info__description">В пути</span>
          <span className="info__text">21ч 15м</span>
        </li>
        <li className="info__item">
          <span className="info__description">2 пересадки</span>
          <span className="info__text">HKG, JNB</span>
        </li>
      </ul>
      <ul className="ticket__info info">
        <li className="info__item">
          <span className="info__description">MOW – HKT</span>
          <span className="info__text">11:20 – 00:50</span>
        </li>
        <li className="info__item">
          <span className="info__description">В пути</span>
          <span className="info__text">13ч 30м</span>
        </li>
        <li className="info__item">
          <span className="info__description">1 пересадка</span>
          <span className="info__text">HKG</span>
        </li>
      </ul>
    </div>
  );
};

export default Ticket;
