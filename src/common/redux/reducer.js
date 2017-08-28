import { combineReducers } from 'redux';

import currentUser from './ducks/currentUserDuck';

const coreReducers = {
  currentUser,
};

const rootReducer = createReducer();

export function createReducer(asyncReducers) {
  return combineReducers({
    ...coreReducers,
    ...asyncReducers,
  });
}

export default rootReducer;
