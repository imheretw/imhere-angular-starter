import angular from 'angular';
import commonPanels from 'common/components/panels/common/common';
import chatTemplate from './chat.tpl';
import ChatController from './ChatController';
import dropdownPanel from 'common/directives/dropdownPanel';
/* @ngInject */
function ConfigureModule($stateProvider) {
  $stateProvider
    .state('admin.chat', {
      url: '/chat',
      views: {
        'content': {
          controller: ChatController,
          controllerAs: 'vm',
          templateUrl: chatTemplate.name,
        },
      },
      reloadOnSearch: false,
    });
}

export default angular
  .module('admin.chat', [
      chatTemplate.name,
      commonPanels.name,
      dropdownPanel.name,
  ])
  .config(ConfigureModule);
