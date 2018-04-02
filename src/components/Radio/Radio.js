import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import style from './radio.scss';

class Radio extends Component {
  init() {

  }
  render() {
    const {
      selectValue, value, disabled, changeOnValue, label, className,
    } = this.props;
    return (
      <div className={cn(style.radioContent, className)}>
        <span className={cn(style.radio)}>
          { selectValue === value &&
            <span className={style.check} />
          }
          <input
            type="radio"
            checked={selectValue === value}
            disabled={disabled}
            onChange={() => changeOnValue(value)}
          />
        </span>
        <span className={style.label}>{label}</span>
      </div>
    );
  }
}

Radio.propTypes = {
  className: PropTypes.string,
  selectValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  changeOnValue: PropTypes.func,
};

export default Radio;
