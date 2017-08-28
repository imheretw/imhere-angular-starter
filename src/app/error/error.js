import angular from 'angular';

import ErrorController from './ErrorController';
import errorTemplate from './error.tpl.html';

import './assets/sass/error.scss';

/* @ngInject */
function ConfigureModule($stateProvider) {
  $stateProvider.state('error', {
    url: '/error/:errCode',
    views: {
      '': {
        template: '<div ui-view="content"></div>',
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
  ])
  .config(ConfigureModule);
