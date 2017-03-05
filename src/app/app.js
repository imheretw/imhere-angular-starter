import 'babel/external-helpers';

import angular from 'angular';
import 'ocLazyLoad';
import 'angular-ui-router';
import 'angular-breadcrumb';
import 'angular-cookies';
import 'angular-messages';
import 'angular-moment';
import 'angular-sanitize';
import 'angular-mocks';
import 'restangular';
import 'g00fy-/angular-datepicker';
import 'ng-dialog';
import 'moment';
import 'jquery';
import 'twbs/bootstrap';
import 'toastr';
import 'satellizer';
import { mocksServiceModule, toastrServiceModule } from 'common/core';
import routing from 'common/utils/routing';
import authServiceModule from 'common/services/authService';
import dialogModule from 'common/services/dialogService';
import listenerServiceModule from 'common/services/listenerService';
import authInterceptor from 'common/utils/auth-interceptors';
import errorInterceptor from 'common/utils/error-interceptors';
import dialogService from 'common/dialog/dialog';

import 'toastr/build/toastr.min.css!';
import 'ng-dialog/css/ngDialog.css!';
import 'twbs/bootstrap/css/bootstrap.css!';
import 'ng-dialog/css/ngDialog-theme-default.css!';
import 'ng-dialog/css/ngDialog-theme-plain.css!';
import 'g00fy-/angular-datepicker/dist/angular-datepicker.css!';

let app = angular.module('app', [
  'ui.router', 'oc.lazyLoad', 'ngCookies', 'ngDialog', 'ncy-angular-breadcrumb', 'ngMessages', 'ngMockE2E',
  'ngSanitize', 'angularMoment', 'datePicker', 'satellizer', 'restangular',
  authServiceModule.name, listenerServiceModule.name,
  mocksServiceModule.name, authInterceptor.name, toastrServiceModule.name, dialogService.name,
  dialogModule.name, errorInterceptor.name,
]);

app.config(routing(app));

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
