import angular from 'angular';
import commonPanels from 'common/components/panels/common/common';
import consultantsTemplate from './consultants.tpl';
import ConsultantsController from './ConsultantsController';
import dropdownPanel from 'common/directives/dropdownPanel';
/* @ngInject */
function ConfigureModule($stateProvider) {
  $stateProvider
    .state('admin.setting.consultants', {
      url: '/consultants',
      views: {
        'setting-content': {
          controller: ConsultantsController,
          controllerAs: 'vm',
          templateUrl: consultantsTemplate.name,
        },
      },
      reloadOnSearch: false,
    });
}

export default angular
  .module('admin.setting.consultants', [
      consultantsTemplate.name,
      commonPanels.name,
      dropdownPanel.name,
  ])
  .config(ConfigureModule);
