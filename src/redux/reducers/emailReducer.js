import { handleActions } from "redux-actions";

import { postEmailRequest, postEmailSuccess } from "../actions/emailActions";

const defaultState = {
  email: {},
  isFetching: false,
  isUpdating: false,
  error: null,
};

export default handleActions(
  {
    [postEmailRequest](state) {
      return {
        ...state,
        email: {},
        isFetching: true,
        error: null,
      };
    },
    [postEmailSuccess](state, { payload }) {
      return {
        ...state,
        email: payload.docs,
        isFetching: false,
        error: null,
      };
    },
  },
  defaultState
);
