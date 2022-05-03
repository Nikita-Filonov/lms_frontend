import {INITIAL_USERS} from './initialState';
import {SET_CONFIRM_ACTION, SET_THEME} from "./actionTypes";
import {THEME_BACKUP} from "../../Utils/Constants/Backup";


export const usersReducer = (state = INITIAL_USERS, action = {}) => {
  switch (action.type) {
    case SET_THEME:
      localStorage.setItem(THEME_BACKUP, JSON.stringify(action.payload));
      return {...state, theme: action.payload};
    case SET_CONFIRM_ACTION:
      return {...state, confirmAction: action.payload};
    default:
      return state;
  }
};
