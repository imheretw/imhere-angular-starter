import angular from 'angular';

import { modalModule } from 'common/core';
import popupModule from 'common/components/popup';
import timeModule from 'common/components/time';
import authModule from 'common/services/auth';
import basicLayoutModule, { layout, css } from 'common/layouts/admin/index';
import LoginController from './LoginController';
import loginTemplate from './login.tpl';

/* @ngInject */
function ConfigureModule($stateProvider) {
  $stateProvider.state('login', {
    url: '/login',
    views: {
      '': {
        templateUrl: layout.name,
      },
      '@login': {
        controller: LoginController,
        controllerAs: 'loginCtrl',
        templateUrl: loginTemplate.name,
      },
      'assets-css@login': {
        templateUrl: css.name,
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
    basicLayoutModule.name,
  ])
  .config(ConfigureModule);
