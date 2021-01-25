import { DOC_APPLIST, SIGN_OUT } from "../actions/types";

const INITIAL_STATE = {
  appList: [],
  loading: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DOC_APPLIST:
      return {
        ...state,
        appList: action.payload,
        loading: false,
      };

    case SIGN_OUT:
      return { ...state, appList: [], loading: false };

    default:
      return state;
  }
};
