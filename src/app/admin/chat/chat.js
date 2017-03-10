import angular from 'angular';
import commonPanels from 'common/components/panels/common/common';
import chatComponent from './components/chat';
import dropdownPanel from 'common/directives/dropdownPanel';
import ballLoader from 'common/directives/ballLoader';
/* @ngInject */
function config($stateProvider) {
  $stateProvider
    .state('admin.chat', {
      url: '/chat',
      views: {
        'content': {
          component: 'chat',
        },
      },
      reloadOnSearch: false,
    });
}

export default angular
  .module('admin.chat', [
    chatComponent.name,
    commonPanels.name,
    dropdownPanel.name,
    ballLoader.name,
  ])
  .config(config);
