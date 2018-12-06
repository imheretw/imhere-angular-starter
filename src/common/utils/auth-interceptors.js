import angular from 'angular';

/**
 * Authentication with token and email for every server request. (Sets HTTP headers)
 *
 * This interceptor shows the error from the server (i18n key).
 * Also sets global error variable if the request fails and redirects the
 * user to '/' when he is not authorized.
 * @see http://engineering.talis.com/articles/client-side-error-logging/
 */

export default angular.module('AuthInterceptor', [])
.factory('authInterceptor', authInterceptor);

/* @ngInject */
function authInterceptor($q, $cookies, $injector) {
  return {
    request: (config) => {
      config.headers = config.headers || {};
      if ($cookies.getObject('auth_token')) {
        config.headers.Authorization = $cookies.getObject('auth_token');
      }

      return config;
    },

    responseError: (rejection) => {
      if (rejection.status === 401) {
        $cookies.putObject('auth_token', '');
        $injector.get('ngDialog').closeAll();
        $injector.get('$state').go('login');

        return $q.reject(rejection);
      }

      /* If not a 401, do nothing with this error.
       * This is necessary to make a `responseError`
       * interceptor a no-op. */
      return $q.reject(rejection);
    },
  };
}
