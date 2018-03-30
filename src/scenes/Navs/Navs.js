import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import _ from 'lodash';
import style from './Navs.scss';

const navList = [
  {
    name: '系统概括',
    lable: 'system',
    children: [
      { name: '运行状态', lable: 'running', path: '/server/running' },
      { name: '发布服务', lable: 'publish', path: '/server/publish' },
    ],
  },
];
class Navs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lable: null,
    };
  }
  handleChangeOnLabel(value) {
    const { lable } = this.state;
    if (lable !== value) {
      this.setState({
        lable: value,
      });
    } else {
      this.setState({
        lable: null,
      });
    }
  }
  render() {
    const { lable } = this.state;
    console.log(window.location);
    return (
      <div className={style.main}>
        <div className={style.title}>
          <span>Aibton Auto Server</span>
        </div>
        {
          navList.map(a => (
            <div key={a.lable} className={style.navItem}>
              <div
                className={style.navItemName}
                onClick={() => this.handleChangeOnLabel(a.lable)}
              >
                <div className={style.nameIcon}>
                  <span className={style.icon1} />
                  <span>{a.name}</span>
                </div>
                <span className={style.icon2} />
              </div>
              {
                !_.isEmpty(a.children) && a.lable === lable &&
                <div className={style.navContent}>
                  {
                    a.children.map(b => (
                      <NavLink to={b.path} key={b.lable} className={cn(style.navChild, { [style.active]: window.location.pathname === b.path })}>
                        {b.name}
                      </NavLink>
                    ))
                  }
                </div>
              }
            </div>
          ))
        }
      </div>
    );
  }
}
export default Navs;
