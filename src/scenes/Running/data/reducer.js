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
        systemInfoCpu: action.payload.cpu,
        systemInfoMemory: action.payload.memory,
        systemInfoOperator: action.payload.operator,
      };
    case FETCH_SYSTEM_PROJECTSTATUS:
      return {
        ...state,
        systemProjectList: action.payload,
      };
    default: return state;
  }
};
