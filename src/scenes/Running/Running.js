import React from 'react';
import moment from 'moment';
import style from './Running.scss';
/* eslint-disable */
import ServerItem from 'components/ServerItem';
import StatusItem from 'components/StatusItem';
/* eslint-enable */

const Running = () => (
  <div className={style.main}>
    <div className={style.partI}>
      <ServerItem
        data={50}
        name="CPU"
      />
      <ServerItem
        data={78}
        name="内存"
      />
      <div className={style.lastUser}>
        <div className={style.user}>
          <span className={style.userIcon} />
          <div className={style.userInfo}>
            <div className={style.userTitle}>
              <span>最后操作人</span>
              <span className={style.itemIcon} />
            </div>
            <span className={style.name}>name</span>
          </div>
        </div>
        <div className={style.userItem}>
          <span className={style.label}>操作分支</span>
          <span>master</span>
        </div>
        <div className={style.userItem}>
          <span className={style.label}>操作时间</span>
          <span>12：00</span>
        </div>
      </div>
    </div>
    <div className={style.statusTitle}>
      <span>服务器项目运行状态</span>
    </div>
    <div className={style.statusContent}>
      <StatusItem
        name="CORS"
        status="运行中"
        branch="master"
        operatorName="NAme"
        operatorTime={moment().format('YYYY-DD-MM HH:mm:SS')}
      />
      <StatusItem
        name="CORS"
        status="运行中"
        branch="master"
        operatorName="NAme"
        operatorTime={moment().format('YYYY-DD-MM HH:mm:SS')}
      />
      <StatusItem
        name="CORS"
        status="运行中"
        branch="master"
        operatorName="NAme"
        operatorTime={moment().format('YYYY-DD-MM HH:mm:SS')}
      />
      <StatusItem
        name="CORS"
        status="运行中"
        branch="master"
        operatorName="NAme"
        operatorTime={moment().format('YYYY-DD-MM HH:mm:SS')}
      />
    </div>

  </div>
);

export default Running;
