import angular from 'angular';

import { modalModule } from 'common/core';
import popupModule from 'common/components/popup';
import timeModule from 'common/components/time';
import adminLayoutNoSidebarTemplate from 'common/layouts/admin/admin-layout-no-sidebar.tpl';
import adminHeaderTemplate from 'common/layouts/admin/header.tpl';
import adminJSTemplate from 'common/layouts/admin/admin-assets-css-development.tpl';
import adminCSSTemplate from 'common/layouts/admin/admin-assets-js-development.tpl';
import authModule from 'common/services/auth';

import RegisterController from './RegisterController';
import LayoutController from '../../common/layouts/LayoutController';
import registerTemplate from './register.tpl';

/* @ngInject */
function ConfigureModule($stateProvider) {
  $stateProvider.state('register', {
    url: '/register',
    views: {
      '': {
        templateUrl: adminLayoutNoSidebarTemplate.name,
      },
      '@register': {
        controller: RegisterController,
        controllerAs: 'registerCtrl',
        templateUrl: registerTemplate.name,
      },
      'header@register': {
        controller: LayoutController,
        controllerAs: 'layoutCtrl',
        templateUrl: adminHeaderTemplate.name,
      },
      'assets-css@register': {
        templateUrl: adminCSSTemplate.name,
      },
      'assets-js@register': {
        templateUrl: adminJSTemplate.name,
      },
    },
  });
}

export default angular
  .module('register', [
    modalModule.name,
    popupModule.name,
    timeModule.name,
    authModule.name,
    registerTemplate.name,
    adminLayoutNoSidebarTemplate.name,
    adminHeaderTemplate.name,
    adminJSTemplate.name,
    adminCSSTemplate.name,
  ])
  .config(ConfigureModule);
