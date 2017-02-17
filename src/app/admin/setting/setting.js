import angular from 'angular';
import commonPanels from 'common/components/panels/common/common';
import settingTemplate from './setting.tpl';
import SettingController from './SettingController';
import dropdownPanel from 'common/directives/dropdownPanel';
/* @ngInject */
function ConfigureModule($stateProvider) {
  $stateProvider
    .state('admin.setting', {
      url: '/setting',
      views: {
        'content': {
          controller: SettingController,
          controllerAs: 'vm',
          templateUrl: settingTemplate.name,
        },
      },
      reloadOnSearch: false,
    });
}

export default angular
  .module('admin.setting', [
      settingTemplate.name,
      commonPanels.name,
      dropdownPanel.name,
  ])
  .config(ConfigureModule);
