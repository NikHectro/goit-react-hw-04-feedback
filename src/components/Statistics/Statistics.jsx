import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ values, total, positivePercentage }) => {
  return (
    <>
      <ul>
        {values.map(item => (
          <li className={css.reaction} key={item[0]}>
            <p>
              {item[0]}: {item[1]}
            </p>
          </li>
        ))}
      </ul>

      <div className={css.asume}>
        <p>total: {total}</p>
        <p>positive feedback: {positivePercentage}%</p>
      </div>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  values: PropTypes.arrayOf(PropTypes.array).isRequired,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
