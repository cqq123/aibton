import { fetchRequest } from '../../../../utils';

export const CHANGE_PROJECT_TYPE = 'publish/CHANGE_PROJECT_TYPE';
export const GET_PROJECT_TYPE = 'publish/GET_PROJECT_TYPE';
export const CHANGE_PROJECT_BRANCH = 'publish/CHANGE_PROJECT_BRANCH';
export const GET_BRANCH = 'publish/GET_BRANCH';
export const CHANGE_PROJECT_RUN_TYPE = 'publish/CHANGE_PROJECT_RUN_TYPE';
export const PUBLISH = 'publish/PUBLISH';
export const FETCH_RUN_STATUS = 'publish/FETCH_RUN_STATUS';

export const changeProjectType = type => ({
  type: CHANGE_PROJECT_TYPE,
  payload: type,
});

export const getProjectType = () =>
  async (dispatch) => {
    const { msg = [] } = await fetchRequest('/apis/sysProject/getAll');
    dispatch({
      type: GET_PROJECT_TYPE,
      payload: msg,
    });
  };

export const changeProjectBranch = branch => ({
  type: CHANGE_PROJECT_BRANCH,
  payload: branch,
});

export const getBranch = () =>
  async (dispatch) => {
    const { msg = [] } = await fetchRequest('/apis/sysProject/getAllBranch');
    dispatch({
      type: GET_BRANCH,
      payload: msg,
    });
  };

export const changeProjectRunType = value => ({
  type: CHANGE_PROJECT_RUN_TYPE,
  payload: value,
});

export const publish = () =>
  async (dispatch, getState) => {
    const parmas = {
      branch: getState().publish.projectBranch,
      sysProjectId: getState().publish.projectType,
      sysProjectName: getState().publish.projectTypeList.find(a => a.id === getState().publish.projectType).name,
      type: getState().publish.projectRunType,
    };
    const result = await fetch('/apis/startProject/run', {
      credentials: 'include',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(parmas),
    }).then(res => res.json());
    dispatch({
      type: PUBLISH,
      payload: result.success,
    });
  };

export const getRunstatus = () =>
  async (dispatch) => {
    const result = await fetch('/apis/startProject/runStatus', {
      credentials: 'include',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => res.json());
    dispatch({
      type: FETCH_RUN_STATUS,
      payload: result,
    });
  };
