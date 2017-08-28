/* eslint-disable global-require */

import initialize from './initialize/initialize';

const core = angular
  .module('core', [
    'ui.router', 'oc.lazyLoad', 'ngCookies', 'ngDialog', 'ncy-angular-breadcrumb', 'ngMessages', 'ngMockE2E',
    'ngSanitize', 'angularMoment', 'satellizer', 'restangular', 'ngRedux',

    require('./services/index').default.name,
    require('./utils/index').default.name,
  ]);

initialize(core);

export default core;
