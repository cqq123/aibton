import {
  LOGINSYS,
  GET_LOGIN_INFO,
} from './actions';

const initialState = {
  isLogin: false,
  loginInfo: {
    name: '',
    post: '',
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGINSYS:
      return {
        ...state,
        isLogin: action.payload,
      };
    case GET_LOGIN_INFO:
      return {
        ...state,
        loginInfo: {
          ...state.loginInfo,
          ...action.payload,
        },
      };
    default: return state;
  }
};

