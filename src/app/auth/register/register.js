import angular from 'angular';

import authServiceModule from 'common/services/authService';
import registerComponent from './components/register';
import socialSignupComponent from './components/socialSignup/socialSignup';

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
    registerComponent.name,
    socialSignupComponent.name,
  ])
  .config(config);
