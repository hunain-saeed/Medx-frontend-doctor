import axios from "axios";
// Action creators
import { setAlert } from "./alert";
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  DOC_PROFILE,
  SIGN_OUT,
} from "./types";

// All backend apis
import { Register, Login, DocProfile } from "../apis/api";

// Global variable
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

// logout User
export const logoutDoc = () => {
  return async (dispatch) => {
    dispatch({ type: SIGN_OUT });
    dispatch(setAlert("You are logged out!", "warning"))
  }
}

// Load User
export const loadDoc = () => {
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
        const res = await axios.get(DocProfile, config2);
        dispatch({ type: DOC_PROFILE, payload: res.data });
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

// Register for Doctor and Patient both
// in progress
export const register = (user, name) => {
  return async (dispatch) => {
    const body = JSON.stringify(user);
    try {
      const res = await axios.post(Register + name, body, config);

      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    } catch (err) {
      console.log(err);

      if (err.response) {
        const errors = err.response.data
          ? err.response.data.errors
          : err.response;
        if (errors) {
          errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
        }
      }

      dispatch({ type: REGISTER_FAIL });
    }
  };
};

// Login for Patient and Doctor both
// completed
export const login = ({ email, password }, name) => {
  return async (dispatch) => {
    const body = JSON.stringify({ email, password });
    try {
      localStorage.setItem("role", name);
      const res = await axios.post(Login + name, body, config);

      dispatch({ type: LOGIN_SUCCESS, payload: res.data });

    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }

      dispatch({ type: LOGIN_FAIL });
    }
  };
};
