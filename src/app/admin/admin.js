import angular from 'angular';
import { modalModule } from 'common/core';
import consultantsModule from './consultants/consultants';
import widgetsModule from './widget/widget';
import profileModule from './profile/profile';
import AdminController from './AdminController';
import adminDashboardLayoutTemplate from 'common/layouts/admin/admin-dashboard-layout.tpl';
import adminJSTemplate from 'common/layouts/admin/admin-assets-css-development.tpl';
import adminCSSTemplate from 'common/layouts/admin/admin-assets-js-development.tpl';
import adminTemplate from './admin.tpl';
import adminChatLayoutTemplate from './chat/chat.tpl';
import adminSettingLayoutTemplate from './setting/setting.tpl';
import adminPanels from 'common/components/panels/admin/admin';
import commonPanels from 'common/components/panels/common/common';
import AdminSettingController from './setting/SettingController';
import AdminChatController from './chat/ChatController';
import dropdownPanel from 'common/directives/dropdownPanel';
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
          controller: AdminChatController,
          controllerAs: 'vm',
          templateUrl: adminChatLayoutTemplate.name,
        },
      },
      reloadOnSearch: false,
    })
    .state('admin.setting', {
      url: '/setting',
      views: {
        'content': {
          controller: AdminSettingController,
          controllerAs: 'vm',
          templateUrl: adminSettingLayoutTemplate.name,
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
      adminDashboardLayoutTemplate.name,
      adminJSTemplate.name,
      adminCSSTemplate.name,
      adminTemplate.name,
      adminPanels.name,
      adminChatLayoutTemplate.name,
      adminSettingLayoutTemplate.name,
      commonPanels.name,
      dropdownPanel.name,
  ])
  .config(ConfigureModule);
