import { combineReducers } from 'redux';

import currentUser from './ducks/currentUserDuck';
import adminLayout from './ducks/adminLayoutDuck';

const coreReducers = {
  currentUser,
  adminLayout,
};

const rootReducer = createReducer();

export function createReducer(asyncReducers) {
  return combineReducers({
    ...coreReducers,
    ...asyncReducers,
  });
}

export default rootReducer;
