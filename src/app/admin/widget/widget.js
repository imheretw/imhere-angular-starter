import angular from 'angular';
import commonPanels from 'common/components/panels/common/common';
import dropdownPanel from 'common/directives/dropdownPanel';
import widgetComponent from './components/widget';

/* @ngInject */
function config($stateProvider) {
  $stateProvider
    .state('admin.setting.widget', {
      url: '/widget',
      views: {
        'setting-content': {
          component: 'widget',
        },
      },
      reloadOnSearch: false,
    });
}

export default angular
  .module('admin.setting.widget', [
    widgetComponent.name,
    commonPanels.name,
    dropdownPanel.name,
  ])
  .config(config);
