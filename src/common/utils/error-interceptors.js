'use strict';
import angular from 'angular';

/**
 * Authentication with token and email for every server request. (Sets HTTP headers)
 *
 * This interceptor shows the error from the server (i18n key).
 * Also sets global error variable if the request fails and redirects the user to '/' when he is not authorized.
 * @see http://engineering.talis.com/articles/client-side-error-logging/
 */

export default angular.module('ErrorInterceptor', [])
.factory('errorInterceptor', errorInterceptor);

/*@ngInject*/
function errorInterceptor($q, $cookieStore, $log, $injector) {
  return {
    responseError: (rejection) => {
      switch (rejection.status) {
        case 404:
          $injector.get('$state').go('error', { errCode: rejection.status });
          $injector.get('ngDialog').closeAll();
          $log.debug('server response 404');
          break;
        case 500:
          if (!rejection.config.url.includes('sync')) {
            $injector.get('$state').go('error', { errCode: rejection.status });
            $injector.get('ngDialog').closeAll();
            $log.debug('server response 500');
          }

          break;
        default:
          $log.debug(`rejection not handled with response code ${rejection.status}`);
          break;
      }

      /* If not a 500, do nothing with this error.
       * This is necessary to make a `responseError`
       * interceptor a no-op. */
      return $q.reject(rejection);
    },
  };
}
