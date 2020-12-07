import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import * as actions from '../../redux/action';

import type { InitialStateType } from '../../redux/reducer';
import styles from './Filters.module.scss';

type PropsFromRedux = ConnectedProps<typeof connector>;

type PropsType = PropsFromRedux;

const Filters: React.FC<PropsType> = ({ props, setTransfer }: PropsType) => {
  const { all, none, one, two, three } = props;

  const changeCheckboxHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name, checked } = target;
    const isAllPressed = name === 'all';

    setTransfer({ ...props, [name]: checked }, isAllPressed);
  };

  return (
    <section className={`${styles.content__filters} ${styles.filters}`}>
      <h4 className={styles.filters__header}>количество пересадок</h4>
      <label className={styles.filters__item}>
        <input
          className={styles.filters__checkbox}
          type="checkbox"
          name="all"
          checked={all}
          onChange={changeCheckboxHandler}
        />
        <span className={styles['filters__custom-checkbox']} />
        <span className={styles.filters__name}>Все</span>
      </label>
      <label className={styles.filters__item}>
        <input
          className={styles.filters__checkbox}
          type="checkbox"
          name="none"
          checked={none}
          onChange={changeCheckboxHandler}
        />
        <span className={styles['filters__custom-checkbox']} />
        <span className={styles.filters__name}>Без пересадок</span>
      </label>
      <label className={styles.filters__item}>
        <input
          className={styles.filters__checkbox}
          type="checkbox"
          name="one"
          checked={one}
          onChange={changeCheckboxHandler}
        />
        <span className={styles['filters__custom-checkbox']} />
        <span className={styles.filters__name}>1 пересадка</span>
      </label>
      <label className={styles.filters__item}>
        <input
          className={styles.filters__checkbox}
          type="checkbox"
          name="two"
          checked={two}
          onChange={changeCheckboxHandler}
        />
        <span className={styles['filters__custom-checkbox']} />
        <span className={styles.filters__name}>2 пересадки</span>
      </label>
      <label className={styles.filters__item}>
        <input
          className={styles.filters__checkbox}
          type="checkbox"
          name="three"
          checked={three}
          onChange={changeCheckboxHandler}
        />
        <span className={styles['filters__custom-checkbox']} />
        <span className={styles.filters__name}>3 пересадки</span>
      </label>
    </section>
  );
};

const mapStateToProps = (state: InitialStateType) => {
  return {
    props: state.transfer,
  };
};

const connector = connect(mapStateToProps, actions);

export default connector(Filters);
