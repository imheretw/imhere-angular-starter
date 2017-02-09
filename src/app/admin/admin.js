import angular from 'angular';
import { modalModule } from 'common/core';
import adminDashboardLayoutTemplate from 'common/layouts/admin/admin-dashboard-layout.tpl';
import adminJSTemplate from 'common/layouts/admin/admin-assets-css-development.tpl';
import adminCSSTemplate from 'common/layouts/admin/admin-assets-js-development.tpl';
import adminTemplate from './admin.tpl';
import adminChatLayoutTemplate from './chat/chat.tpl';
import pannels from 'common/components/panels/index';

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
    });
}

export default angular
  .module('admin', [
      modalModule.name,
      adminDashboardLayoutTemplate.name,
      adminJSTemplate.name,
      adminCSSTemplate.name,
      adminTemplate.name,
      pannels.name,
      adminChatLayoutTemplate.name,
  ])
  .config(ConfigureModule);
