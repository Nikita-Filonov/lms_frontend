import {combineReducers} from 'redux';
import {usersReducer} from "./User/usersReducer";


export default combineReducers({
  users: usersReducer,
});
