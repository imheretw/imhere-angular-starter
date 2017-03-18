import ngRedux from 'ng-redux';

import initialize from './initialize/initialize';

import mocksServiceModule from './services/mocksService';
import toastrServiceModule from './services/toastrService';
import authServiceModule from './services/authService';
import dialogModule from './services/dialogService';
import listenerServiceModule from './services/listenerService';
import authInterceptor from './utils/auth-interceptors';
import errorInterceptor from './utils/error-interceptors';
import dialogService from './dialog/dialog';

const core = angular
  .module('core', [
    'ui.router', 'oc.lazyLoad', 'ngCookies', 'ngDialog', 'ncy-angular-breadcrumb', 'ngMessages', 'ngMockE2E',
    'ngSanitize', 'angularMoment', 'satellizer', 'restangular', ngRedux,
    mocksServiceModule.name,
    toastrServiceModule.name,
    authServiceModule.name,
    authInterceptor.name, toastrServiceModule.name, dialogService.name,
    dialogModule.name, errorInterceptor.name, listenerServiceModule.name,
  ]);

initialize(core);

export default core;
