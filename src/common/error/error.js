import angular from 'angular';

import { modalModule } from 'common/core';
import adminLayoutTemplate from 'common/layouts/admin/admin-layout.tpl';
import adminHeaderTemplate from 'common/layouts/admin/header.tpl';
import adminJSTemplate from 'common/layouts/admin/admin-assets-css-development.tpl';
import adminCSSTemplate from 'common/layouts/admin/admin-assets-js-development.tpl';

import LayoutController from '../../common/layouts/LayoutController';
import ErrorController from 'common/error/ErrorController';
import errorTemplate from 'common/error/error.tpl';

/* @ngInject */
function ConfigureModule($stateProvider) {
  $stateProvider.state('error', {
    url: '/error/:errCode',
    views: {
      '': {
        controller: LayoutController,
        controllerAs: 'layoutCtrl',
        templateUrl: adminLayoutTemplate.name,
      },
      '@error': {
        controller: ErrorController,
        controllerAs: 'errCtrl',
        templateUrl: errorTemplate.name,
      },
      'header@error': {
        controller: LayoutController,
        controllerAs: 'layoutCtrl',
        templateUrl: adminHeaderTemplate.name,
      },
      'assets-css@error': {
        templateUrl: adminCSSTemplate.name,
      },
      'assets-js@error': {
        templateUrl: adminJSTemplate.name,
      },
    },
  });
}

export default angular
  .module('error', [
    modalModule.name,
    adminLayoutTemplate.name,
    adminHeaderTemplate.name,
    adminJSTemplate.name,
    adminCSSTemplate.name,
    errorTemplate.name,
  ])
  .config(ConfigureModule);
