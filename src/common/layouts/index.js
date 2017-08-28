/* eslint-disable global-require */

import angular from 'angular';

export default angular
  .module('layouts', [
    require('./admin/adminLayout').default.name,
    require('./auth/authLayout').default.name,
  ]);
