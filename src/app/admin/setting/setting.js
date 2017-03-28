import angular from 'angular';
import commonPanels from 'common/components/panels/common/common';
import dropdownPanel from 'common/directives/dropdownPanel';
import settingComponent from './components/setting';

/* @ngInject */
function config($stateProvider) {
  $stateProvider
    .state('admin.setting', {
      url: '/setting',
      views: {
        content: {
          component: 'setting',
        },
      },
      reloadOnSearch: false,
    });
}

export default angular
  .module('admin.setting', [
    settingComponent.name,
    commonPanels.name,
    dropdownPanel.name,
  ])
  .config(config);
