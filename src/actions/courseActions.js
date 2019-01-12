import * as types from "../actions/actionTypes";

export function loadCourses(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}

export function deleteCourse(id) {
  return { type: types.DELETE_COURSE, id };
}
