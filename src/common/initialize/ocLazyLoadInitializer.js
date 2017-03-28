export default function initialize(module) {
  module.config(['$ocLazyLoadProvider', ($ocLazyLoadProvider) => {
    $ocLazyLoadProvider.config({
      debug: true,
    });
  }]);
}
