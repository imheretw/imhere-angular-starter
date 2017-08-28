/* eslint-disable global-require */

export default angular
  .module('admin.common.layouts', [
    require('./adminLayout/adminLayout').default.name,
  ]);
