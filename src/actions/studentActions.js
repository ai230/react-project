import * as types from "../actions/actionTypes";

export function loadStudents(students) {
  return { type: types.LOAD_STUDENT_SUCCESS, students };
}

export function fetchStudents(students) {
  return { type: types.FETCH_STUDENT_SUCCESS, students };
}

export function loadAvailableCourses(courses) {
  return { type: types.LOAD_AVAILABLE_COURSES, courses };
}

export function registerCourses(courses, studentId, students) {
  return { type: types.REGISTER_COURSES, courses, studentId, students };
}
