import React from 'react';
import PropTypes from 'prop-types';
import style from './RunStatus.scss';

const Runstatus = ({ runStatusInfo, onClose }) => (
  <div className={style.main}>
    <div className={style.content}>
      <div className={style.close}>
        <span className={style.closeIcon} onClick={() => onClose()} />
      </div>
      <span className={style.msg}>{runStatusInfo.msg}</span>
    </div>
  </div>
);

Runstatus.propTypes = {
  runStatusInfo: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Runstatus;
