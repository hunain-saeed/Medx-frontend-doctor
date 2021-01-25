import { SET_ALERT, REMOVE_ALERT } from "./types";

let id = 0;
export const setAlert = (msg, alertType, timeout = 5000) => {
  return (dispatch) => {
    id++;
    dispatch({ type: SET_ALERT, payload: { msg, alertType, id } });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
  };
};
