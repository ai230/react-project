import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function studentReducer(state = initialState.students, action) {
  switch (action.type) {
    case types.LOAD_STUDENT_SUCCESS:
      return action.students;

    default:
      return state;
  }
}
