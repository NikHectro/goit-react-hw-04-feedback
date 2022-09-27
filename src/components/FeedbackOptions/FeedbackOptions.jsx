import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ keys, handleBtnClick }) => {
  return keys.map(key => (
    <button
      type="button"
      key={key}
      className={css.button}
      onClick={() => handleBtnClick(key)}
    >
      {key}
    </button>
  ));
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  keys: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleBtnClick: PropTypes.func.isRequired,
};
