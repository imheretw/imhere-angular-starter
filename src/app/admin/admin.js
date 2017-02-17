import angular from 'angular';
import { modalModule } from 'common/core';
import consultantsModule from './consultants/consultants';
import widgetsModule from './widget/widget';
import profileModule from './profile/profile';
import chatModule from './chat/chat';
import settingModule from './setting/setting';
import AdminController from './AdminController';
import adminDashboardLayoutTemplate from 'common/layouts/admin/admin-dashboard-layout.tpl';
import adminJSTemplate from 'common/layouts/admin/admin-assets-css-development.tpl';
import adminCSSTemplate from 'common/layouts/admin/admin-assets-js-development.tpl';
import adminTemplate from './admin.tpl';
import adminPanels from 'common/components/panels/admin/admin';
/* @ngInject */
function ConfigureModule($stateProvider) {
  $stateProvider
    .state('admin', {
      url: '/admin',
      views: {
        '': {
          templateUrl: adminDashboardLayoutTemplate.name,
        },
        '@admin': {
          controller: AdminController,
          controllerAs: 'vm',
          templateUrl: adminTemplate.name,
        },
        'assets-css@admin': {
          templateUrl: adminCSSTemplate.name,
        },
        'assets-js@admin': {
          templateUrl: adminJSTemplate.name,
        },
      },
      reloadOnSearch: false,
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
      adminDashboardLayoutTemplate.name,
      adminJSTemplate.name,
      adminCSSTemplate.name,
      adminTemplate.name,
      adminPanels.name,
  ])
  .config(ConfigureModule);
