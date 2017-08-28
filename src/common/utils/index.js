/* eslint-disable global-require */

export default angular
  .module('common.utils', [
    require('./auth-interceptors').default.name,
    require('./error-interceptors').default.name,
  ]);
