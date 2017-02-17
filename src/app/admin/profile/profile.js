import angular from 'angular';
import commonPanels from 'common/components/panels/common/common';
import profilTemplate from './profile.tpl';
import ProfileController from './ProfileController';
import dropdownPanel from 'common/directives/dropdownPanel';
/* @ngInject */
function ConfigureModule($stateProvider) {
  $stateProvider
    .state('admin.profile', {
      url: '/profile',
      views: {
        'content': {
          controller: ProfileController,
          controllerAs: 'vm',
          templateUrl: profilTemplate.name,
        },
      },
      reloadOnSearch: false,
    });
}

export default angular
  .module('admin.profile', [
      profilTemplate.name,
      commonPanels.name,
      dropdownPanel.name,
  ])
  .config(ConfigureModule);
