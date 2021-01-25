// TODO get current log in user profile
import axios from "axios";
// Action creators
import { setAlert } from "./alert";
import {
  DOC_APPLIST,
} from "./types";

// All backend apis
import { AppointList } from "../apis/api";


// doc appointment list
export const appList = () => {
  return async (dispatch) => {
    if (localStorage.getItem("token") !== null) {
      const token = await localStorage.getItem("token");
      const config2 = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      };
      try {
        const res = await axios.get(AppointList, config2);
        console.log(res);
        dispatch({ type: DOC_APPLIST, payload: res.data });
      } catch (err) {
        console.error(err);

        if (err.response) {
          const errors = err.response.data ? err.response.data.errors : null;
          if (errors) {
            errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
          }
        }
      }
    }
  };
};