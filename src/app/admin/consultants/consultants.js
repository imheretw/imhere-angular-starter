/* eslint-disable global-require */

import angular from 'angular';

/* @ngInject */
function config($stateProvider) {
  $stateProvider
    .state('admin.setting.consultants', {
      url: '/consultants',
      views: {
        'setting-content': {
          component: 'consultants',
        },
      },
      reloadOnSearch: false,
    });
}

export default angular
  .module('admin.setting.consultants', [
    require('./components/index').default.name,
  ])
  .config(config);
