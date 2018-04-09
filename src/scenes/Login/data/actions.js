import { fetchRequest } from '../../../../utils';

export const LOGINSYS = 'login/LOGINSYS';

export const loginSys = (name, post) =>
  async (dispatch) => {
    console.log(name, post);
    const result = await fetch('/apis/sysUser/login', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, post }),
    }).then((res) => { console.log(res, '---------'); });
  };
