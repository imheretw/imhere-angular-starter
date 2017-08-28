import angular from 'angular';
import { createReducer } from 'common/redux/reducer';

class ReduxService {

  /* @ngInject */
  constructor($q, $ngRedux) {
    this.$q = $q;
    this.$ngRedux = $ngRedux;
    this.asyncReducers = {}; // to cache all async reducers
  }

  injectAsyncReducers(asyncReducers) {
    Object.entries(asyncReducers).forEach(([name, reducer]) => {
      this.injectAsyncReducer(name, reducer);
    });
  }

  injectAsyncReducer(name, asyncReducer) {
    this.asyncReducers[name] = asyncReducer;
    this.$ngRedux.replaceReducer(createReducer(this.asyncReducers));
  }
}

export default angular
  .module('common.services.reduxService', [])
  .service('reduxService', ReduxService);
