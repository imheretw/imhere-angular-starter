import angular from 'angular';

import authServiceModule from 'common/services/authService';
import loginComponent from './components/login';
import socialSigninComponent from './components/socialSignin';

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
    authServiceModule.name,
    loginComponent.name,
    socialSigninComponent.name,
  ])
  .config(config);
