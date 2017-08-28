/* eslint-disable global-require */

export default angular
  .module('auth.common.layouts', [
    require('./authLayout/authLayout').default.name,
  ]);
