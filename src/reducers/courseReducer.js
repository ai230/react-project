import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.course, action) {
  switch (action.type) {
    case types.LOAD_COURSE_SUCCESS:
      return action.students;
    case types.CREATE_COURSE:
      return [...state, Object.assign({}, action.course)];
    default:
      return state;
  }
}
