import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import style from './Login.scss';
/* eslint-disable */
import QInput from 'components/QInput';
/* eslint-enable */
import { loginSys } from './data/actions';

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
  handleLogin() {
    const { name, post } = this.state;
    this.props.loginSys(name, post);
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
          <div className={style.loginBtn} onClick={() => this.handleLogin()}>登陆</div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  loginSys,
};
Login.propTypes = {
  loginSys: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(Login);
