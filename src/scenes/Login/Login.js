import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
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
  componentDidUpdate(prevProps) {
    if (this.props.isLogin && prevProps.isLogin !== this.props.isLogin) {
      this.props.history.push('/server/running');
    }
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
    const { name, position } = this.state;
    this.props.loginSys(name, position);
  }
  render() {
    const { name, position } = this.state;
    return (
      <div className={style.main}>
        <div className={style.inputContent}>
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
const mapStateToProps = ({ login }) => ({
  isLogin: login.isLogin,
});

Login.propTypes = {
  loginSys: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  isLogin: PropTypes.bool.isRequired,
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
