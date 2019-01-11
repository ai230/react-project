import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.course, action) {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    case types.CREATE_COURSE: {
      const newState = [...state, Object.assign({}, action.course)];
      localStorage.setItem("course", JSON.stringify(newState));
      return newState;
    }
    default:
      return state;
  }
}
