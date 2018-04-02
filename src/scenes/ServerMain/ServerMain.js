import React from 'react';
import { Route } from 'react-router-dom';
import style from './ServerMain.scss';
import Navs from '../Navs';
import Running from '../Running';
import Publish from '../Publish';
/* eslint-disable */
import Header from 'components/Header';
/* eslint-enable */

const ServerMain = () => (
  <div className={style.main}>
    <Navs />
    <div className={style.content}>
      <Header />
      <Route exact path="/server/running" component={Running} />
      <Route exact path="/server/publish" component={Publish} />
    </div>
  </div>
);

export default ServerMain;
