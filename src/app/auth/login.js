import angular from 'angular';

import { modalModule } from 'common/core';
import authServiceModule from 'common/services/authService';
import basicLayoutModule, { layout, css } from 'common/layouts/auth/index';
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
    authServiceModule.name,
    loginTemplate.name,
    basicLayoutModule.name,
  ])
  .config(ConfigureModule);
