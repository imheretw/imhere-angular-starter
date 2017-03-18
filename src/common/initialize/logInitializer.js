export default function initialize(module) {
  module.config(['$logProvider', '$compileProvider', function ($logProvider, $compileProvider) {
    if (window.prod) {
      // http://ng-perf.com/2014/10/24/simple-trick-to-speed-up-your-angularjs-app-load-time/
      $logProvider.debugEnabled(false);
      $compileProvider.debugInfoEnabled(false);
    }
  }]);
}
