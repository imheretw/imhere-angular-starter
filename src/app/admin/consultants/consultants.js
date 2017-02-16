import angular from 'angular';
import commonPanels from 'common/components/panels/common/common';
import adminSettingConsultantsTemplate from './consultants.tpl';
import AdminSettingConsultantsController from './ConsultantsController';
import dropdownPanel from 'common/directives/dropdownPanel';
/* @ngInject */
function ConfigureModule($stateProvider) {
  $stateProvider
    .state('admin.setting.consultants', {
      url: '/consultants',
      views: {
        'setting-content': {
          controller: AdminSettingConsultantsController,
          controllerAs: 'vm',
          templateUrl: adminSettingConsultantsTemplate.name,
        },
      },
      reloadOnSearch: false,
    });
}

export default angular
  .module('admin.consultants', [
      adminSettingConsultantsTemplate.name,
      commonPanels.name,
      dropdownPanel.name,
  ])
  .config(ConfigureModule);
