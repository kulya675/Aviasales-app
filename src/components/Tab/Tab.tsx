/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { ChangeEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Radio } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';

import * as actions from '../../redux/action';
import type { InitialStateType, KindType } from '../../redux/reducer';

import styles from './Tab.module.scss';

type PropsFromRedux = ConnectedProps<typeof connector>;

type PropsType = PropsFromRedux;

const Tab: React.FC<PropsType> = ({ kind, setKind }: PropsType) => {
  const chandgeHandler = (event: RadioChangeEvent) => {
    setKind(event.target.value);
  };

  return (
    <nav className={`${styles.tickets__tab} ${styles.tab}`}>
      <Radio.Group className={styles.tab__list} value={kind} buttonStyle="solid" size="large">
        <Radio.Button className={styles.tab__item} value="cheep" onChange={chandgeHandler}>
          самый дешевый
        </Radio.Button>
        <Radio.Button className={styles.tab__item} value="fast" onChange={chandgeHandler}>
          самый быстрый
        </Radio.Button>
      </Radio.Group>
    </nav>
  );
};

const mapStateToProps = (state: InitialStateType) => {
  return {
    kind: state.kind,
  };
};

const connector = connect(mapStateToProps, actions);

export default connector(Tab);
