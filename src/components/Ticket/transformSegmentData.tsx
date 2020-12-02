import React from 'react';
import { format } from 'date-fns';
import type { TicketSegmentsElem } from '../../redux/reducer';
import styles from './Ticket.module.scss';

type TransformedDate = {
  time: string;
  duration: string;
};

const transformDate = (date: string, duration: number): TransformedDate => {
  const startDate = new Date(date);
  const endDate = new Date(Date.parse(String(startDate)) + duration * 60 * 1000);
  const formatedStartDate = format(startDate, 'HH:mm');
  const formatedEndDate = format(endDate, 'HH:mm');
  const durationHour = Math.floor(duration / 60);
  const durationMinutes = format((duration - durationHour * 60) * 60 * 1000, 'mm');
  return {
    time: `${formatedStartDate} – ${formatedEndDate}`,
    duration: `${durationHour}ч ${durationMinutes}м`,
  };
};

// eslint-disable-next-line import/prefer-default-export
export const transfromSegmentData = (data: TicketSegmentsElem): React.ReactNode => {
  const { origin, destination, date, stops, duration } = data;
  const time = transformDate(date, duration);
  let transferCounter = '';

  switch (stops.length) {
    case 1:
      transferCounter = '1 пересадка';
      break;
    case 2:
    case 3:
      transferCounter = `${stops.length} пересадки`;
      break;
    default:
      transferCounter = 'Без пересадок';
  }

  return (
    <ul className={`${styles.ticket__info} ${styles.info}`}>
      <li className={styles.info__item}>
        <span className={styles.info__description}>{`${origin} – ${destination}`}</span>
        <span className={styles.info__text}>{time.time}</span>
      </li>
      <li className={styles.info__item}>
        <span className={styles.info__description}>В пути</span>
        <span className={styles.info__text}>{time.duration}</span>
      </li>
      <li className={styles.info__item}>
        <span className={styles.info__description}>{transferCounter}</span>
        <span className={styles.info__text}>{stops.join(', ')}</span>
      </li>
    </ul>
  );
};
