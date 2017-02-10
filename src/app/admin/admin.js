import angular from 'angular';
import { modalModule } from 'common/core';
import AdminController from './AdminController';
import adminDashboardLayoutTemplate from 'common/layouts/admin/admin-dashboard-layout.tpl';
import adminJSTemplate from 'common/layouts/admin/admin-assets-css-development.tpl';
import adminCSSTemplate from 'common/layouts/admin/admin-assets-js-development.tpl';
import adminTemplate from './admin.tpl';
import adminChatLayoutTemplate from './chat/chat.tpl';
import adminSettingLayoutTemplate from './setting/setting.tpl';
import adminProfileLayoutTemplate from './profile/profile.tpl';
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
    })
    .state('admin.chat', {
      url: '/chat',
      views: {
        'content': {
          templateUrl: adminChatLayoutTemplate.name,
        },
      },
      reloadOnSearch: false,
    })
    .state('admin.setting', {
      url: '/setting',
      views: {
        'content': {
          templateUrl: adminSettingLayoutTemplate.name,
        },
      },
      reloadOnSearch: false,
    })
    .state('admin.profile', {
      url: '/profile',
      views: {
        'content': {
          templateUrl: adminProfileLayoutTemplate.name,
        },
      },
      reloadOnSearch: false,
    });
}

export default angular
  .module('admin', [
      modalModule.name,
      adminDashboardLayoutTemplate.name,
      adminJSTemplate.name,
      adminCSSTemplate.name,
      adminTemplate.name,
      adminPanels.name,
      adminChatLayoutTemplate.name,
      adminSettingLayoutTemplate.name,
      adminProfileLayoutTemplate.name,
  ])
  .config(ConfigureModule);
