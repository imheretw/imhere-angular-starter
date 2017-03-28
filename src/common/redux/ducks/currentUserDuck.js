/* ACTION TYPES */
export const SET_CURRENT_USER = 'SET_CURRENT_USER';

/* REDUCER */

export default function reducer(state = {}, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.currentUser;
    default:
      return state;
  }
}

/* ACTION CREATORS */

export function setCurrentUser(currentUser) {
  return {
    type: SET_CURRENT_USER,
    currentUser,
  };
}
