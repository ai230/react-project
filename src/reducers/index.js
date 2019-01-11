import { combineReducers } from "redux";
import students from "./studentReducer";
import courses from "./courseReducer";

const rootReducer = combineReducers({
  courses
});

export default rootReducer;
