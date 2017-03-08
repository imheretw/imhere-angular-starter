import { combineReducers } from 'redux';

import currentUser from '../ducks/currentUserDuck';

const rootReducer = combineReducers({
  currentUser,
});

export default rootReducer;
