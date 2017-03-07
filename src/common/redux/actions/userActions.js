import * as types from '../constants/ActionTypes';

export function setCurrentUser(currentUser) {
  return {
    type: types.SET_CURRENT_USER,
    currentUser,
  };
}
