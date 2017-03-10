import angular from 'angular';

import { modalModule } from 'common/core';
import authServiceModule from 'common/services/authService';
import authLayoutModule from 'common/layouts/auth/authLayout';
import loginComponent from './components/login';

/* @ngInject */
function config($stateProvider) {
  $stateProvider.state('login', {
    url: '/login',
    views: {
      '': {
        component: 'authLayout',
      },
      '@login': {
        component: 'login',
      },
    },
  });
}

export default angular
  .module('login', [
    modalModule.name,
    authServiceModule.name,
    authLayoutModule.name,
    loginComponent.name,
  ])
  .config(config);
