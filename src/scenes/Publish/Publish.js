import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Publish.scss';
/* eslint-disable */
import { Radio, RadioGroup } from 'components/Radio';
import Select from 'components/Select';
/* eslint-enable */


class Publish extends Component {
  componentDidMount() {
    this.props.getProjectType();
  }
  render() {
    const { changeProjectType, projectType, projectTypeList, projectBranch, changeProjectBranch  } = this.props;
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
              <Radio
                value={1}
                label="COS"
                className={style.radio}
              />
              <Radio
                value={2}
                label="WECHART"
                className={style.radio}
              />
            </RadioGroup>
          </div>
          <div className={style.selectContent}>
            <span className={style.selectTitle}>分支选择：</span>
            <Select
              value={projectBranch}
              onChange={value => changeProjectBranch(value)}
              className={style.select}
            >
              <Select.Option
                value=""
                label="请选择"
              />
              <Select.Option
                value="master"
                label="master"
              />
              <Select.Option
                value="feature/WECHAT-20180321"
                label="feature/WECHAT-20180321"
              />
              <Select.Option
                value="feature/FAST-RUN-BOOT"
                label="feature/FAST-RUN-BOOT"
              />
            </Select>
          </div>
          <div className={style.selectContent}>
            <span className={style.selectTitle}>功能选择：</span>
            <RadioGroup
              selectValue={1}
              changeOnValue={(value) => { console.log(value); }}
            >
              <Radio
                value={1}
                label="发布"
                className={style.radio}
              />
              <Radio
                value={2}
                label="快速发布"
                className={style.radio}
              />
              <Radio
                value={3}
                label="重启"
                className={style.radio}
              />
            </RadioGroup>
          </div>
          <div className={style.runBtn}>
            <span>执行</span>
          </div>
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
};
export default Publish;
