import { combineReducers } from "redux";
import authReducer from "./authReducer";
import alertReducer from "./alertReducer";
import specReducer from "./specReducer";
import appListReducer from "./appListReducer";

export default combineReducers({
  auth: authReducer,
  applist: appListReducer,
  alert: alertReducer,
  spec: specReducer,
});
