import angular from 'angular';

import { modalModule } from 'common/core';
import popupModule from 'common/components/popup';
import timeModule from 'common/components/time';
import adminLayoutNoSidebarTemplate from 'common/layouts/admin/admin-layout-no-sidebar.tpl';
import adminHeaderTemplate from 'common/layouts/admin/header.tpl';
import adminJSTemplate from 'common/layouts/admin/admin-assets-css-development.tpl';
import adminCSSTemplate from 'common/layouts/admin/admin-assets-js-development.tpl';
import authModule from 'common/services/auth';

import LoginController from './LoginController';
import LayoutController from '../../common/layouts/LayoutController';
import loginTemplate from './login.tpl';

/* @ngInject */
function ConfigureModule($stateProvider) {
  $stateProvider.state('login', {
    url: '/login',
    views: {
      '': {
        templateUrl: adminLayoutNoSidebarTemplate.name,
      },
      '@login': {
        controller: LoginController,
        controllerAs: 'loginCtrl',
        templateUrl: loginTemplate.name,
      },
      'header@login': {
        controller: LayoutController,
        controllerAs: 'layoutCtrl',
        templateUrl: adminHeaderTemplate.name,
      },
      'assets-css@login': {
        templateUrl: adminCSSTemplate.name,
      },
      'assets-js@login': {
        templateUrl: adminJSTemplate.name,
      },
    },
  });
}

export default angular
  .module('login', [
    modalModule.name,
    popupModule.name,
    timeModule.name,
    authModule.name,
    loginTemplate.name,
    adminLayoutNoSidebarTemplate.name,
    adminHeaderTemplate.name,
    adminJSTemplate.name,
    adminCSSTemplate.name,
  ])
  .config(ConfigureModule);
