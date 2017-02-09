import angular from 'angular';

import { modalModule } from 'common/core';
import adminDashboardLayoutTemplate from 'common/layouts/admin/admin-dashboard-layout.tpl';
import adminJSTemplate from 'common/layouts/admin/admin-assets-css-development.tpl';
import adminCSSTemplate from 'common/layouts/admin/admin-assets-js-development.tpl';
import adminTemplate from './admin.tpl';
import adminHeader from 'common/components/panels/admin/header';

/* @ngInject */
function ConfigureModule($stateProvider) {
  $stateProvider.state('admin', {
    url: '/admin',
    views: {
      '': {
        templateUrl: adminDashboardLayoutTemplate.name,
      },
      '@admin': {
        templateUrl: adminTemplate.name,
      },
      'assets-css': {
        templateUrl: adminCSSTemplate.name,
      },
      'assets-js': {
        templateUrl: adminJSTemplate.name,
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
      adminHeader.name,
  ])
  .config(ConfigureModule);
