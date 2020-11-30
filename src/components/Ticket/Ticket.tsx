import React from 'react';

import logo from './logo.png';
import styles from './Ticket.module.scss';

const Ticket: React.FC = () => {
  return (
    <div className={`${styles.tickets__ticket} ${styles.ticket}`}>
      <div className={`${styles.ticket__head} ${styles.head}`}>
        <span className={styles.head__price}>13 400 Р</span>
        <img className={styles.head__logo} src={logo} alt="S7 logo" />
      </div>
      <ul className={`${styles.ticket__info} ${styles.info}`}>
        <li className={styles.info__item}>
          <span className={styles.info__description}>MOW – HKT</span>
          <span className={styles.info__text}>10:45 – 08:00</span>
        </li>
        <li className={styles.info__item}>
          <span className={styles.info__description}>В пути</span>
          <span className={styles.info__text}>21ч 15м</span>
        </li>
        <li className={styles.info__item}>
          <span className={styles.info__description}>2 пересадки</span>
          <span className={styles.info__text}>HKG, JNB</span>
        </li>
      </ul>
      <ul className={`${styles.ticket__info} ${styles.info}`}>
        <li className={styles.info__item}>
          <span className={styles.info__description}>MOW – HKT</span>
          <span className={styles.info__text}>11:20 – 00:50</span>
        </li>
        <li className={styles.info__item}>
          <span className={styles.info__description}>В пути</span>
          <span className={styles.info__text}>13ч 30м</span>
        </li>
        <li className={styles.info__item}>
          <span className={styles.info__description}>1 пересадка</span>
          <span className={styles.info__text}>HKG</span>
        </li>
      </ul>
    </div>
  );
};

export default Ticket;
