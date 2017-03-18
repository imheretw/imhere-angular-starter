export default function initialize(module) {
  module.config(['$urlRouterProvider', '$locationProvider', '$httpProvider',
    function ($urlRouterProvider, $locationProvider, $httpProvider) {
    $locationProvider.html5Mode({
      enabled: false,
      requireBase: false,
    });
    $httpProvider.useApplyAsync(true);
    $urlRouterProvider.otherwise('/admin');
  }]);
}
