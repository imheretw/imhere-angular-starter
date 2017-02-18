import angular from 'angular';

import { modalModule } from 'common/core';
import adminLayoutModule, { dashboard, css } from 'common/layouts/admin/index';

import ErrorController from 'common/error/ErrorController';
import errorTemplate from 'common/error/error.tpl';

/* @ngInject */
function ConfigureModule($stateProvider) {
  $stateProvider.state('error', {
    url: '/error/:errCode',
    views: {
      '': {
        templateUrl: dashboard.name,
      },
      '@error': {
        controller: ErrorController,
        controllerAs: 'vm',
        templateUrl: errorTemplate.name,
      },
      'assets-css@error': {
        templateUrl: css.name,
      },
    },
  });
}

export default angular
  .module('error', [
    modalModule.name,
    adminLayoutModule.name,
    errorTemplate.name,
  ])
  .config(ConfigureModule);
