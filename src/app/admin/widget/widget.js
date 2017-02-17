import angular from 'angular';
import commonPanels from 'common/components/panels/common/common';
import widgetTemplate from './widget.tpl';
import WidgetController from './WidgetController';
import dropdownPanel from 'common/directives/dropdownPanel';
/* @ngInject */
function ConfigureModule($stateProvider) {
  $stateProvider
    .state('admin.setting.widget', {
      url: '/widget',
      views: {
        'setting-content': {
          controller: WidgetController,
          controllerAs: 'vm',
          templateUrl: widgetTemplate.name,
        },
      },
      reloadOnSearch: false,
    });
}

export default angular
  .module('admin.setting.widget', [
      widgetTemplate.name,
      commonPanels.name,
      dropdownPanel.name,
  ])
  .config(ConfigureModule);
