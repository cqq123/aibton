import React, { Component } from 'react';
import style from './Login.scss';
/* eslint-disable */
import QInput from 'components/QInput';
/* eslint-enable */

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      position: '',
    };
  }
  handleChangeName(value) {
    this.setState({
      name: value,
    });
  }
  handleChangePosition(value) {
    this.setState({
      position: value,
    });
  }
  render() {
    const { name, position } = this.state;
    return (
      <div className={style.main}>
        <div className={style.inputContent}>
          {/* <span className={style.label}>Aibton Auto Server</span> */}
          <QInput
            className={style.input}
            changeKeywords={value => this.handleChangeName(value)}
            value={name}
            placeholder="请输入正确姓名"
          />
          <QInput
            className={style.input}
            changeKeywords={value => this.handleChangePosition(value)}
            value={position}
            placeholder="请输入职位"
          />
          <div className={style.loginBtn}>登陆</div>
        </div>
      </div>
    );
  }
}

export default Login;
