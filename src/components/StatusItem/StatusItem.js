import React from 'react';
import PropTypes from 'prop-types';
import style from './StatusItem.scss';

const StatusItem = ({ name, status, branch, operatorName, operatorTime }) => (
  <div className={style.serverItem}>
    <div className={style.serverItemName}>
      <span>{name}系统</span>
      <span className={style.itemIcon} />
    </div>
    <div className={style.status}>
      <span>状态：</span>
      <span className={style.statusText}>{status}</span>
    </div>
    <div className={style.userItem}>
      <span className={style.label}>操作分支</span>
      <span>{branch}</span>
    </div>
    <div className={style.userItem}>
      <span className={style.label}>操作时间</span>
      <span>{operatorTime}</span>
    </div>
    <div className={style.operator}>
      <span className={style.label}>启动人</span>
      <span>{operatorName}</span>
    </div>
  </div>
);

StatusItem.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  branch: PropTypes.string.isRequired,
  operatorName: PropTypes.string.isRequired,
  operatorTime: PropTypes.string.isRequired,
};
export default StatusItem;
