import { fetchRequest } from '../../../../utils';

export const LOGINSYS = 'login/LOGINSYS';
export const GET_LOGIN_INFO = 'login/GET_LOGIN_INFO';

export const loginSys = (name, post) =>
  async (dispatch) => {
    const result = await fetch('/apis/sysUser/login', {
      credentials: 'include',
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, post }),
    }).then(res => res.json());
    dispatch({
      type: LOGINSYS,
      payload: result.success,
    });
  };

export const getLoginInfo = () =>
  async (dispatch) => {
    const result = await fetchRequest('/apis/sysUser/loginUserInfo');
    if (result.success) {
      dispatch({
        type: GET_LOGIN_INFO,
        payload: result.msg,
      });
    }
  };
