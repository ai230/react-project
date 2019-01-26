import * as types from "../actions/actionTypes";
import initialState from "./initialState";

function updateLocalStorage(updatedState) {
  localStorage.setItem("students", JSON.stringify(updatedState));
}

export default function studentReducer(state = initialState.students, action) {
  switch (action.type) {
    case types.LOAD_STUDENT_SUCCESS:
      return action.students;

    case types.FETCH_STUDENT_SUCCESS:
      updateLocalStorage(action.students);
      return action.students;

    case types.REGISTER_COURSES:
      let students = [...state];
      students[action.studentId].courses = action.courses;
      updateLocalStorage(students);
      return students;

    case types.LOAD_AVAILABLE_COURSES:
      return action.courses;

    default:
      return state;
  }
}
