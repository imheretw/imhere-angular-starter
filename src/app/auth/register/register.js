import angular from 'angular';

import authServiceModule from 'common/services/authService';
import authLayoutModule from 'common/layouts/auth/authLayout';
import registerComponent from './components/register';

/* @ngInject */
function config($stateProvider) {
  $stateProvider.state('register', {
    url: '/register',
    views: {
      '': {
        component: 'authLayout',
      },
      '@register': {
        component: 'register',
      },
    },
  });
}

export default angular
  .module('register', [
    authServiceModule.name,
    authLayoutModule.name,
    registerComponent.name,
  ])
  .config(config);
