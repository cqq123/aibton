import React from 'react';
import PropTypes from 'prop-types';
import style from './Option.scss';

const Option = ({ label, value, onSelect }) => (
  <div
    className={style.main}
    onClick={() => onSelect(value)}
    title={label}
  >
    <div className={style.wrapper}>
      <span>{label}</span>
    </div>
  </div>
);

Option.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  label: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
};

export default Option;
