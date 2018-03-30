import React, { Component } from 'react';
import PropTypes from 'prop-types';

class QInput extends Component {
  constructor(props) {
    super(props);
    this.handleChangeKeywords = this.handleChangeKeywords.bind(this);
  }
  handleChangeKeywords(e) {
    const { changeKeywords } = this.props;
    changeKeywords(e.target.value);
  }
  render() {
    const {
      className, changeKeywords, changeFocus, ...other
    } = this.props;
    return (
      <input
        className={className}
        onFocus={changeFocus ? () => changeFocus(true) : () => {}}
        onChange={e => this.handleChangeKeywords(e)}
        {...other}
      />
    );
  }
}

QInput.propTypes = {
  className: PropTypes.string,
  changeKeywords: PropTypes.func.isRequired,
  changeFocus: PropTypes.func,
};
export default QInput;
