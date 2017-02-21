import 'babel/external-helpers';

import angular from 'angular';
import 'ocLazyLoad';
import 'angular-ui-router';
import 'angular-breadcrumb';
import 'angular-cookies';
import 'angular-messages';
import 'angular-moment';
import 'angular-sanitize';
import 'restangular';
import 'g00fy-/angular-datepicker';
import 'ng-dialog';
import 'moment';
import 'jquery';
import 'twbs/bootstrap';
import 'toastr';
import 'satellizer';
import { apiServiceModule, toastrServiceModule } from 'common/core';
import routing from 'common/utils/routing';
import authModule from 'common/services/auth';
import dialogModule from 'common/services/dialogService';
import listenerModule from 'common/services/listener';
import authInterceptor from 'common/utils/auth-interceptors';
import errorInterceptor from 'common/utils/error-interceptors';
import dialogService from 'common/dialog/dialog';

import toastr from 'toastr/build/toastr.min.css!'; // eslint-disable-line
import ngDialog from 'ng-dialog/css/ngDialog.css!'; // eslint-disable-line
import ngDialogThemeDefault from 'ng-dialog/css/ngDialog-theme-default.css!'; // eslint-disable-line
import ngDialogThemePlain from 'ng-dialog/css/ngDialog-theme-plain.css!'; // eslint-disable-line
import ngDatePickerPlain from 'g00fy-/angular-datepicker/dist/angular-datepicker.css!'; // eslint-disable-line

let app = angular.module('app', [
  'ui.router', 'oc.lazyLoad', 'ngCookies', 'ngDialog', 'ncy-angular-breadcrumb', 'ngMessages',
  'ngSanitize', 'angularMoment', 'datePicker', 'satellizer', 'restangular',
  authModule.name, listenerModule.name,
  apiServiceModule.name, authInterceptor.name, toastrServiceModule.name, dialogService.name,
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
