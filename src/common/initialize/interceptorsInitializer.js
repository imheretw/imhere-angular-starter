export default function initialize(module) {
  module.config(($httpProvider) => {
    $httpProvider.interceptors.push(
      'authInterceptor',
      'errorInterceptor',
    );
  });
}
