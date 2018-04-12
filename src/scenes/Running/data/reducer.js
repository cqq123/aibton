import {
  FETCH_SYSTEM_INFO,
  FETCH_SYSTEM_PROJECTSTATUS,
} from './actions';

const initialState = {
  systemInfoCpu: {
    name: '',
    percent: '',
    total: '',
  },
  systemInfoMemory: {
    name: '',
    percent: '',
    total: '',
  },
  systemInfoOperator: {
    name: '',
    branch: '',
    time: '',
  },
  systemProjectList: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SYSTEM_INFO:
      return {
        ...state,
        systemInfoCpu: {
          ...state.systemInfoCpu,
          ...action.payload.cpu,
        },
        systemInfoMemory: {
          ...state.systemInfoMemory,
          ...action.payload.memory,
        },
        systemInfoOperator: {
          ...state.systemInfoOperator,
          ...action.payload.operator,
        },
      };
    case FETCH_SYSTEM_PROJECTSTATUS:
      return {
        ...state,
        systemProjectList: action.payload,
      };
    default: return state;
  }
};
