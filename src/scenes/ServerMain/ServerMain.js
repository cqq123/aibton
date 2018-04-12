import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import style from './ServerMain.scss';
import Navs from '../Navs';
import Running from '../Running';
import Publish from '../Publish';
/* eslint-disable */
import Header from 'components/Header';
/* eslint-enable */

const ServerMain = ({ loginInfo }) => (
  <div className={style.main}>
    <Navs />
    <div className={style.content}>
      <Header name={loginInfo.name} post={loginInfo.post} />
      <Route exact path="/server/running" component={Running} />
      <Route exact path="/server/publish" component={Publish} />
    </div>
  </div>
);

const mapStateToProps = ({ login }) => ({
  loginInfo: login.loginInfo,
});

ServerMain.propTypes = {
  loginInfo: PropTypes.object.isRequired,
};
export default connect(mapStateToProps)(ServerMain);
