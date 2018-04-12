import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import style from './Running.scss';
/* eslint-disable */
import ServerItem from 'components/ServerItem';
import StatusItem from 'components/StatusItem';
/* eslint-enable */
import { fetchSystemInfo, fetchSystemProjectStatus } from './data/actions';
import { getLoginInfo } from '../Login/data/actions';

class Running extends Component {
  componentDidMount() {
    this.props.fetchSystemInfo();
    this.props.fetchSystemProjectStatus();
    this.props.getLoginInfo();
  }
  render() {
    const { systemInfoCpu, systemInfoMemory, systemInfoOperator } = this.props;
    return (
      <div className={style.main}>
        <div className={style.partI}>
          <ServerItem
            data={systemInfoCpu.percent}
            name={systemInfoCpu.name}
          />
          <ServerItem
            data={systemInfoMemory.percent}
            name={systemInfoMemory.name}
          />
          <div className={style.lastUser}>
            <div className={style.user}>
              <span className={style.userIcon} />
              <div className={style.userInfo}>
                <div className={style.userTitle}>
                  <span>最后操作人</span>
                  <span className={style.itemIcon} />
                </div>
                <span className={style.name}>{systemInfoOperator.name}</span>
              </div>
            </div>
            <div className={style.userItem}>
              <span className={style.label}>操作分支</span>
              <span>{systemInfoOperator.branch}</span>
            </div>
            <div className={style.userItem}>
              <span className={style.label}>操作时间</span>
              <span>{systemInfoOperator.time}</span>
            </div>
          </div>
        </div>
        <div className={style.statusTitle}>
          <span>服务器项目运行状态</span>
        </div>
        <div className={style.statusContent}>
          {
            this.props.systemProjectList.map((a, idx) => (
              <StatusItem
                key={idx}
                name={a.name}
                status={a.status}
                branch={a.branch}
                operatorName={a.operateName}
                operatorTime={a.operateTime}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

Running.propTypes = {
  fetchSystemInfo: PropTypes.func.isRequired,
  fetchSystemProjectStatus: PropTypes.func.isRequired,
  systemInfoCpu: PropTypes.object.isRequired,
  systemInfoMemory: PropTypes.object.isRequired,
  systemInfoOperator: PropTypes.object.isRequired,
  systemProjectList: PropTypes.array.isRequired,
  getLoginInfo: PropTypes.func.isRequired,
};
const mapStateToProps = ({ running }) => ({
  systemInfoCpu: running.systemInfoCpu,
  systemInfoMemory: running.systemInfoMemory,
  systemInfoOperator: running.systemInfoOperator,
  systemProjectList: running.systemProjectList,
});
export default connect(mapStateToProps, {
  fetchSystemInfo,
  fetchSystemProjectStatus,
  getLoginInfo,
})(Running);
