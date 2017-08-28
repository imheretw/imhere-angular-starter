/* eslint-disable global-require */

import angular from 'angular';

import './styles';

const app = angular.module('app', [
  require('common/core').default.name,
  require('./admin/admin').default.name,
  require('./auth/auth').default.name,
  require('./error/error').default.name,
]);

angular.element(document).ready(() => {
  angular.bootstrap(document.body, [app.name], {
    strictDi: true,
  });
});

export default app;
