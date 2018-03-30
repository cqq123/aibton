import React from 'react';
import PropTypes from 'prop-types';
import style from './ServerItem.scss';
/* eslint-disable */
import RoundPie from 'components/RoundPie';
/* eslint-enable */

const ServerItem = ({ data, name }) => (
  <div className={style.serverItem}>
    <div className={style.serverItemName}>
      <span>服务器{name}使用量</span>
      <span className={style.itemIcon} />
    </div>
    <div className={style.serverItemContent}>
      <span className={style.serverItemStatus}>{data}%</span>
      <RoundPie className={style.chart} data={data} />
    </div>
  </div>
);

ServerItem.propTypes = {
  data: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
export default ServerItem;
