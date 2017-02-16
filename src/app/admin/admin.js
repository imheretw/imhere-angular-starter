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
import commonPanels from 'common/components/panels/common/common';
import adminSettingWidgetTemplate from './setting/widget/widget.tpl';
import adminSettingConsultantsTemplate from './setting/consultants/consultants.tpl';
import AdminSettingController from './setting/SettingController';
import AdminSettingConsultantsController from './setting/consultants/ConsultantsController';
import AdminSettingWidgetController from './setting/widget/WidgetController';
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
    })
    .state('admin.setting.widget', {
      url: '/widget',
      views: {
        'setting-content': {
          controller: AdminSettingWidgetController,
          controllerAs: 'vm',
          templateUrl: adminSettingWidgetTemplate.name,
        },
      },
      reloadOnSearch: false,
    })
    .state('admin.setting.consultants', {
      url: '/consultants',
      views: {
        'setting-content': {
          controller: AdminSettingConsultantsController,
          controllerAs: 'vm',
          templateUrl: adminSettingConsultantsTemplate.name,
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
      adminSettingWidgetTemplate.name,
      adminSettingConsultantsTemplate.name,
      commonPanels.name,
      dropdownPanel.name,
  ])
  .config(ConfigureModule);
