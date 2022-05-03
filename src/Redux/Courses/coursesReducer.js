import {INITIAL_COURSES} from './initialState';
import {SET_CREATE_COURSE_MODAL} from "./actionTypes";


export const coursesReducer = (state = INITIAL_COURSES, action = {}) => {
  switch (action.type) {
    case SET_CREATE_COURSE_MODAL:
      return {...state, createCourseModal: action.payload};
    default:
      return state;
  }
};
