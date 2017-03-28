import angular from 'angular';
import commonPanels from 'common/components/panels/common/common';
import dropdownPanel from 'common/directives/dropdownPanel';
import profileComponent from './components/profile';

/* @ngInject */
function config($stateProvider) {
  $stateProvider
    .state('admin.profile', {
      url: '/profile',
      views: {
        content: {
          component: 'profile',
        },
      },
      reloadOnSearch: false,
    });
}

export default angular
  .module('admin.profile', [
    profileComponent.name,
    commonPanels.name,
    dropdownPanel.name,
  ])
  .config(config);
