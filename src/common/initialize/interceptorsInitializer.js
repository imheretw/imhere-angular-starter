export default function initialize(module) {
  module.config(function ($httpProvider) {
    $httpProvider.interceptors.push(
      'authInterceptor',
      'errorInterceptor',
    );
  });
}
