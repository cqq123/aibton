import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Publish.scss';
/* eslint-disable */
import { Radio, RadioGroup } from 'components/Radio';
import Select from 'components/Select';
/* eslint-enable */
import Runstatus from './components/Runstatus';


class Publish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
    };
  }
  componentDidMount() {
    this.props.getProjectType();
    this.props.getBranch();
  }
  componentDidUpdate() {
    if (this.props.isPublish && this.props.runStatusInfo.code !== '000003') {
      this.props.getRunstatus();
    }
  }
  handlePublish() {
    this.setState({
      isShow: true,
    });
    this.props.publish();
  }
  handleClose() {
    this.setState({
      isShow: false,
    });
  }
  render() {
    const {
      branchList, changeProjectType, projectType,
      projectTypeList, projectBranch, changeProjectBranch,
      changeProjectRunType, projectRunType, isPublish, runStatusInfo,
    } = this.props;
    const { isShow } = this.state;
    return (
      <div className={style.main}>
        <div className={style.title}>
          <span>基本信息选择</span>
        </div>
        <div className={style.content}>
          <div className={style.radioSelect}>
            <span className={style.radioTitle}>项目选择：</span>
            <RadioGroup
              changeOnValue={(value) => { changeProjectType(value); }}
              selectValue={projectType}
            >
              {
                projectTypeList.map((type, idx) => (
                  <Radio
                    key={idx}
                    value={type.id}
                    label={type.name}
                    className={style.radio}
                  />
                ))
              }
            </RadioGroup>
          </div>
          <div className={style.selectContent}>
            <span className={style.selectTitle}>分支选择：</span>
            <Select
              value={projectBranch}
              onChange={value => changeProjectBranch(value)}
              className={style.select}
            >
              {
                branchList.map((branch, idx) => (
                  <Select.Option
                    key={idx}
                    value={branch}
                    label={branch}
                  />
                ))
              }
            </Select>
          </div>
          <div className={style.selectContent}>
            <span className={style.selectTitle}>功能选择：</span>
            <RadioGroup
              selectValue={projectRunType}
              changeOnValue={value => changeProjectRunType(value)}
            >
              <Radio
                value="发布"
                label="发布"
                className={style.radio}
              />
              <Radio
                value="快速发布"
                label="快速发布"
                className={style.radio}
              />
              <Radio
                value="重启"
                label="重启"
                className={style.radio}
              />
            </RadioGroup>
          </div>
          <div className={style.runBtn} onClick={() => this.handlePublish()}>
            <span>执行</span>
          </div>
          {
            isPublish && runStatusInfo.success && isShow &&
            <Runstatus runStatusInfo={runStatusInfo} onClose={() => this.handleClose()} />
          }
        </div>
      </div>
    );
  }
}

Publish.propTypes = {
  changeProjectType: PropTypes.func.isRequired,
  projectType: PropTypes.string.isRequired,
  projectTypeList: PropTypes.array.isRequired,
  getProjectType: PropTypes.func.isRequired,
  projectBranch: PropTypes.string.isRequired,
  changeProjectBranch: PropTypes.func.isRequired,
  getBranch: PropTypes.func.isRequired,
  branchList: PropTypes.array.isRequired,
  changeProjectRunType: PropTypes.func.isRequired,
  projectRunType: PropTypes.string.isRequired,
  publish: PropTypes.func.isRequired,
  isPublish: PropTypes.bool.isRequired,
  getRunstatus: PropTypes.func.isRequired,
  runStatusInfo: PropTypes.object.isRequired,
};
export default Publish;
