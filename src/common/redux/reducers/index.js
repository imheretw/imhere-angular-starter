import { combineReducers } from 'redux';
import {
  SET_CURRENT_USER,
} from '../constants/ActionTypes';

function currentUser(state = {}, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.currentUser;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  currentUser,
});

export default rootReducer;
