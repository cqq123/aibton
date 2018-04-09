import { fetchRequest } from '../../../../utils';

export const FETCH_SYSTEM_INFO = 'running/FETCH_SYSTEM_INFO';
export const FETCH_SYSTEM_PROJECTSTATUS = 'running/FETCH_SYSTEM_PROJECTSTATUS';

export const fetchSystemInfo = () =>
  async (dispatch) => {
    const { msg } = await fetchRequest('/apis/system/info');
    dispatch({
      type: FETCH_SYSTEM_INFO,
      payload: msg,
    });
  };

export const fetchSystemProjectStatus = () =>
  async (dispatch) => {
    const { msg = [] } = await fetchRequest('/apis/system/projectStatus');
    console.log(msg, '--------------');
    dispatch({
      type: FETCH_SYSTEM_PROJECTSTATUS,
      payload: msg,
    });
  };
