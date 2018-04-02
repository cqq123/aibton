import {
  CHANGE_PROJECT_TYPE,
  GET_PROJECT_TYPE,
  CHANGE_PROJECT_BRANCH,
} from './actions';

const initialState = {
  projectTypeList: [],
  projectType: '',
  projectBranch: '',
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
    default: return state;
  }
};
