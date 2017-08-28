import angular from 'angular';
import commonPanels from 'common/components/panels/common/common';
import consultantsComponent from './components/consultants';
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
    consultantsComponent.name,
    commonPanels.name,
  ])
  .config(config);
