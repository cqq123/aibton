import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './groupRadio.scss';

class RadioGroup extends Component {
  imit() {

  }
  render() {
    const { changeOnValue, selectValue, children, ...other } = this.props;
    return (
      <div {...other} className={style.group}>
        {
          React.Children.map(children, (child) => {
            return React.cloneElement(child, {
              selectValue,
              changeOnValue,
            });
          })
        }
      </div>
    );
  }
}

RadioGroup.propTypes = {
  changeOnValue: PropTypes.func.isRequired,
  selectValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
  children: PropTypes.node.isRequired,
};

export default RadioGroup;
