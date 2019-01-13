import { combineReducers } from "redux";
import students from "./studentReducer";
import courses from "./courseReducer";

const rootReducer = combineReducers({
  students,
  courses
});

export default rootReducer;
