import initialize from './initialize/initialize';

const core = angular
  .module('core', [
    'ui.router', 'oc.lazyLoad', 'ngCookies', 'ngDialog', 'ncy-angular-breadcrumb', 'ngMessages', 'ngMockE2E',
    'ngSanitize', 'angularMoment', 'satellizer', 'restangular', 'ngRedux',

    require('./services/mocksService').default.name,
    require('./services/toastrService').default.name,
    require('./services/authService').default.name,
    require('./services/listenerService').default.name,
    require('./services/dialogService').default.name,

    require('./utils/auth-interceptors').default.name,
    require('./utils/error-interceptors').default.name,
  ]);

initialize(core);

export default core;
