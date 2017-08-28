import angular from 'angular';

import layout from 'common/layouts/index';

import ErrorController from './ErrorController';
import errorTemplate from './error.tpl.html';

import './assets/sass/error.scss';

/* @ngInject */
function ConfigureModule($stateProvider) {
  $stateProvider.state('error', {
    url: '/error/:errCode',
    views: {
      '': {
        component: 'adminLayout',
      },
      'content@error': {
        controller: ErrorController,
        controllerAs: 'vm',
        template: errorTemplate,
      },
    },
  });
}

export default angular
  .module('error', [
    layout.name,
  ])
  .config(ConfigureModule);
