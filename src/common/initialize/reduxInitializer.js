import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import rootReducer from 'common/redux/reducer';

export default function initialize(module) {
  module.config(($ngReduxProvider) => {
    $ngReduxProvider.createStoreWith(rootReducer, [thunk, createLogger()]);
  });
}
