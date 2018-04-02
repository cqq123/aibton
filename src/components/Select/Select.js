import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import clickOutside from 'react-click-outside';
import style from './Select.scss';

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOptionListShow: false,
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleClickOnControl = this.handleClickOnControl.bind(this);
  }

  get controlText() {
    const { children, value } = this.props;
    return React.Children
      .toArray(children)
      .find(child => child.props.value === value).props.label;
  }

  handleSelect(selectValue) {
    const { value, onChange } = this.props;
    if (selectValue !== value) {
      onChange(selectValue);
    }
    this.setState({ isOptionListShow: false });
  }

  handleClickOnControl() {
    const { isOptionListShow } = this.state;
    this.setState({ isOptionListShow: !isOptionListShow });
  }

  handleClickOutside() {
    this.setState({ isOptionListShow: false });
  }

  render() {
    const {
      children,
      className,
      block,
    } = this.props;
    const { isOptionListShow } = this.state;
    const controlText = this.controlText;
    return (
      <div
        className={cn(style.main, className, {
          [style.block]: block,
        })}
      >
        <i
          className={cn(style.caret, {
            [style.up]: isOptionListShow,
          })}
          onClick={this.handleClickOnControl}
        />
        <div
          className={style.control}
          onClick={this.handleClickOnControl}
          title={controlText}
        >
          <div className={style.controlText}>
            <span>{controlText}</span>
          </div>
        </div>
        {isOptionListShow &&
          <div className={style.optionList}>
            {
              React.Children.map(children, child => React.cloneElement(child, {
                onSelect: this.handleSelect,
              }))
            }
          </div>
        }
      </div>
    );
  }
}

Select.propTypes = {
  className: PropTypes.string,
  block: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default clickOutside(Select);
