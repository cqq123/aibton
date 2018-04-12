import React from 'react';
import PropTypes from 'prop-types';
import style from './Header.scss';

const Header = ({ name, post }) => (
  <div className={style.main}>
    <span className={style.lable}>{name}</span>
    <span className={style.lable}>{post}</span>
  </div>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
};

export default Header;
