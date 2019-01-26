import * as types from "../actions/actionTypes";
import initialState from "./initialState";

function updateLocalStorage(updatedState) {
  localStorage.setItem("courses", JSON.stringify(updatedState));
}

export default function courseReducer(state = initialState.course, action) {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    case types.CREATE_COURSE: {
      let updatedState = [...state];
      const temp = state.filter(item => item.title === action.course.title);
      if (0 == temp.length) {
        updatedState = [...state, Object.assign({}, action.course)];
        updateLocalStorage(updatedState);
      }
      return updatedState;
    }
    case types.DELETE_COURSE: {
      // copy current list of items
      const list = [...state];
      // filter out the item being deleted
      const updatedState = list.filter(item => item.title !== action.id);
      localStorage.setItem("courses", JSON.stringify(updatedState));
      return updatedState;
    }
    default:
      return state;
  }
}
