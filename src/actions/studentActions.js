import * as types from "../actions/actionTypes";

export function loadStudentsSuccess(students) {
  return { type: types.LOAD_STUDENT_SUCCESS };
}

export function loadStudents(studentList) {
  return function(dispatch) {
    loadStudentsSuccess(studentList);
  };
}
