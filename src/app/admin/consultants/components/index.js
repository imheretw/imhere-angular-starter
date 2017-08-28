/* eslint-disable global-require */

import angular from 'angular';

export default angular
  .module('admin.consultants.components', [
    require('./consultants').default.name,
  ]);
