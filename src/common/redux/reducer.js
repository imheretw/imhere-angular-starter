import { combineReducers } from 'redux';

import currentUser from './ducks/currentUserDuck';
import adminLayout from './ducks/adminLayoutDuck';

const rootReducer = combineReducers({
  currentUser,
  adminLayout,
});

export default rootReducer;
