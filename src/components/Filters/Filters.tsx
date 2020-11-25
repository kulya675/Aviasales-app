import React from 'react';

import './Filters.scss';

const Filters: React.FC = () => {
  return (
    <section className="content__filters filters">
      <h4 className="filters__header">количество пересадок</h4>
      <label className="filters__item">
        <input className="filters__checkbox" type="checkbox" />
        <span className="filters__custom-checkbox" />
        <span className="filters__name">Все</span>
      </label>
      <label className="filters__item">
        <input className="filters__checkbox" type="checkbox" />
        <span className="filters__custom-checkbox" />
        <span className="filters__name">Без пересадок</span>
      </label>
      <label className="filters__item">
        <input className="filters__checkbox" type="checkbox" />
        <span className="filters__custom-checkbox" />
        <span className="filters__name">1 пересадка</span>
      </label>
      <label className="filters__item">
        <input className="filters__checkbox" type="checkbox" />
        <span className="filters__custom-checkbox" />
        <span className="filters__name">2 пересадки</span>
      </label>
      <label className="filters__item">
        <input className="filters__checkbox" type="checkbox" />
        <span className="filters__custom-checkbox" />
        <span className="filters__name">3 пересадки</span>
      </label>
    </section>
  );
};

export default Filters;
