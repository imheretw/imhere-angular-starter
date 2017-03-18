import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import rootReducer from 'common/redux/reducers';

function initialize(module) {
  module.config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('/api');
  });

  module.config(['$urlRouterProvider', '$locationProvider', '$compileProvider', '$logProvider', '$httpProvider',
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

    // $ocLazyLoadProvider.config({
    //   debug: true,
    // });
  }]);

  module.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor', 'errorInterceptor');
  });

  module.config(function ($ngReduxProvider) {
    $ngReduxProvider.createStoreWith(rootReducer, [thunk, createLogger()]);
  });

  module.config(['ngDialogProvider', function (ngDialogProvider) {
    ngDialogProvider.setDefaults({
      closeByDocument: false,
    });
  }]);
}

export default initialize;
