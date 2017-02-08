import angular from 'angular';

import { modalModule } from 'common/core';
import adminLayoutTemplate from 'common/layouts/admin/admin-layout.tpl';
import adminHeaderTemplate from 'common/layouts/admin/header.tpl';
import adminJSTemplate from 'common/layouts/admin/admin-assets-css-development.tpl';
import adminCSSTemplate from 'common/layouts/admin/admin-assets-js-development.tpl';

import DashboardController from './DashboardController';
import LayoutController from '../../common/layouts/LayoutController';

import dashboardTemplate from './dashboards.tpl';

/* @ngInject */
function ConfigureModule($stateProvider) {
  $stateProvider.state('dashboards', {
    url: '/dashboard',
    views: {
      '': {
        controller: LayoutController,
        controllerAs: 'layoutCtrl',
        templateUrl: adminLayoutTemplate.name,
      },
      '@dashboards': {
        controller: DashboardController,
        controllerAs: 'dashboardCtrl',
        templateUrl: dashboardTemplate.name,
      },
      'header@dashboards': {
        controller: LayoutController,
        controllerAs: 'layoutCtrl',
        templateUrl: adminHeaderTemplate.name,
      },
      'assets-css@dashboards': {
        templateUrl: adminCSSTemplate.name,
      },
      'assets-js@dashboards': {
        templateUrl: adminJSTemplate.name,
      },
    },
    reloadOnSearch: false,
    ncyBreadcrumb: {
      label: 'Dashboard',
    },
  });
}

export default angular
  .module('dashboard', [
    modalModule.name,
    dashboardTemplate.name,
    adminLayoutTemplate.name,
    adminHeaderTemplate.name,
    adminJSTemplate.name,
    adminCSSTemplate.name,
  ])
  .config(ConfigureModule);
