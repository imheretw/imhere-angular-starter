import angular from 'angular';
import { modalModule } from 'common/core';
import consultantsModule from './consultants/consultants';
import widgetsModule from './widget/widget';
import profileModule from './profile/profile';
import chatModule from './chat/chat';
import settingModule from './setting/setting';
import AdminController from './AdminController';
import adminLayoutModule, { layout, css } from 'common/layouts/admin/index';

import adminTemplate from './admin.tpl';
import adminPanels from 'common/components/panels/admin/admin';
/* @ngInject */
function ConfigureModule($stateProvider) {
  $stateProvider
    .state('admin', {
      url: '/admin',
      views: {
        '': {
          templateUrl: layout.name,
        },
        '@admin': {
          controller: AdminController,
          controllerAs: 'vm',
          templateUrl: adminTemplate.name,
        },
        'assets-css@admin': {
          templateUrl: css.name,
        },
      },
      reloadOnSearch: false,
      resolve: {
        /*@ngInject*/
        user: (authService) => authService.getCurrentUser(),
      },
    });
}

export default angular
  .module('admin', [
      modalModule.name,
      consultantsModule.name,
      widgetsModule.name,
      profileModule.name,
      chatModule.name,
      settingModule.name,
      adminLayoutModule.name,
      adminTemplate.name,
      adminPanels.name,
  ])
  .config(ConfigureModule);
