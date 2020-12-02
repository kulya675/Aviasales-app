import React from 'react';
import type { TicketI } from '../../redux/reducer';
import { transfromSegmentData } from './transformSegmentData';

import styles from './Ticket.module.scss';

type TicketProps = {
  ticket: TicketI;
};

const Ticket: React.FC<TicketProps> = ({ ticket }) => {
  const {
    carrier,
    price,
    segments: [to, from],
  } = ticket;

  return (
    <div className={`${styles.tickets__ticket} ${styles.ticket}`}>
      <div className={`${styles.ticket__head} ${styles.head}`}>
        <span className={styles.head__price}>{`${price} P`}</span>
        <img className={styles.head__logo} src={`http://pics.avs.io/99/36/${carrier}.png`} alt={`${carrier}`} />
      </div>
      {transfromSegmentData(to)}
      {transfromSegmentData(from)}
    </div>
  );
};

export default Ticket;
