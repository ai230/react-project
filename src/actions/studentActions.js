import * as types from "../actions/actionTypes";

export function loadStudents(students) {
  return { type: types.LOAD_STUDENT_SUCCESS, students };
}

export function fetchStudents(students) {
  return { type: types.FETCH_STUDENT_SUCCESS, students };
}
