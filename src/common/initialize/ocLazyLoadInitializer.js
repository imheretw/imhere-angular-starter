export default function initialize(module) {
  module.config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
      debug: true,
    });
  }]);
}
