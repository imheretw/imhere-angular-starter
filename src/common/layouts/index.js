/* eslint-disable global-require */

import angular from 'angular';

export default angular
  .module('layouts', [
    require('./auth/authLayout').default.name,
  ]);
