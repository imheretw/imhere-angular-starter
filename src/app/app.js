import angular from 'angular';
import ngRedux from 'ng-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from 'common/redux/reducers/index';
import coreModule from 'common/core';

// temporary solution for ui-sref not working on FutureState
// https://github.com/christopherthielen/ui-router-extras/issues/367
// https://github.com/christopherthielen/ui-router-extras/issues/59
import adminModule from './admin/admin';
import authModule from './auth/auth';

// import 'toastr/build/toastr.min.css';
// import 'ng-dialog/css/ngDialog.css';
// import 'ng-dialog/css/ngDialog-theme-default.css';
// import 'ng-dialog/css/ngDialog-theme-plain.css';
import '../assets/app.scss';

let app = angular.module('app', [
  'ui.router', 'oc.lazyLoad', 'ngCookies', 'ngDialog', 'ncy-angular-breadcrumb', 'ngMessages', 'ngMockE2E',
  'ngSanitize', 'angularMoment', 'satellizer', 'restangular', ngRedux,
  coreModule.name,
  adminModule.name,
  authModule.name,
]);

app.config(function(RestangularProvider) {
  RestangularProvider.setBaseUrl('/api');
});

app.config(['$urlRouterProvider', '$locationProvider', '$compileProvider', '$logProvider', '$httpProvider',
  '$ocLazyLoadProvider',
  function ($urlRouterProvider, $locationProvider, $compileProvider, $logProvider, $httpProvider, $ocLazyLoadProvider) {
  $locationProvider.html5Mode({
    enabled: false,
    requireBase: false,
  });
  $httpProvider.useApplyAsync(true);
  $urlRouterProvider.otherwise('/admin');

  if (window.prod) {
    // http://ng-perf.com/2014/10/24/simple-trick-to-speed-up-your-angularjs-app-load-time/
    $logProvider.debugEnabled(false);
    $compileProvider.debugInfoEnabled(false);
  }

  $ocLazyLoadProvider.config({
    debug: true,
  });
}]);

app.config(function ($httpProvider) {
  $httpProvider.interceptors.push('authInterceptor', 'errorInterceptor');
});

app.config(function ($ngReduxProvider) {
  $ngReduxProvider.createStoreWith(rootReducer, [thunk, createLogger()]);
});

app.config(['ngDialogProvider', function (ngDialogProvider) {
  ngDialogProvider.setDefaults({
    closeByDocument: false,
  });
}]);

angular.element(document).ready(function () {
  angular.bootstrap(document.body, [app.name], {
    strictDi: true,
  });
});

export default app;
