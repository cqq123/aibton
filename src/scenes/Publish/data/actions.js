import { fetchRequest } from '../../../../utils';

export const CHANGE_PROJECT_TYPE = 'publish/CHANGE_PROJECT_TYPE';
export const GET_PROJECT_TYPE = 'publish/GET_PROJECT_TYPE';
export const CHANGE_PROJECT_BRANCH = 'publish/CHANGE_PROJECT_BRANCH';

export const changeProjectType = type => ({
  type: CHANGE_PROJECT_TYPE,
  payload: type,
});

export const getProjectType = () =>
  async (dispatch) => {
    console.log('apis');
    const { msg = [] } = await fetchRequest('/sysProject/getAll');
    dispatch({
      type: GET_PROJECT_TYPE,
      payload: msg,
    });
  };

export const changeProjectBranch = branch => ({
  type: CHANGE_PROJECT_BRANCH,
  payload: branch,
});
