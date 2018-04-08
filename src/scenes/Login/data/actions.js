import { fetchRequest } from '../../../../utils';

export const LOGINSYS = 'login/LOGINSYS';

export const loginSys = (name, post) =>
  async (dispatch) => {
    const result = await fetchRequest('/sysUser/login', {
      name,
      post,
    });
    console.log(result, '---------------------');
  };
