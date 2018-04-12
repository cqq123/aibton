import {
  CHANGE_PROJECT_TYPE,
  GET_PROJECT_TYPE,
  CHANGE_PROJECT_BRANCH,
  GET_BRANCH,
  CHANGE_PROJECT_RUN_TYPE,
  PUBLISH,
  FETCH_RUN_STATUS,
} from './actions';

const initialState = {
  projectTypeList: [],
  branchList: [],
  projectType: '',
  projectBranch: '',
  projectRunType: '',
  isPublish: false,
  runStatusInfo: {
    success: false,
    msg: '',
    code: '',
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECT_TYPE:
      return {
        ...state,
        projectTypeList: action.payload,
      };
    case CHANGE_PROJECT_TYPE:
      return {
        ...state,
        projectType: action.payload,
      };
    case CHANGE_PROJECT_BRANCH:
      return {
        ...state,
        projectBranch: action.payload,
      };
    case GET_BRANCH:
      return {
        ...state,
        branchList: action.payload,
      };
    case CHANGE_PROJECT_RUN_TYPE:
      return {
        ...state,
        projectRunType: action.payload,
      };
    case PUBLISH:
      return {
        ...state,
        isPublish: action.payload,
      };
    case FETCH_RUN_STATUS:
      return {
        ...state,
        runStatusInfo: {
          ...state.runStatusInfo,
          ...action.payload,
        },
      };
    default: return state;
  }
};
