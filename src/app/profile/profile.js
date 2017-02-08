import angular from 'angular';

import dashboardModule from 'app/dashboard/dashboard';
import adminLayoutTemplate from 'common/layouts/admin/admin-layout.tpl';
import adminHeaderTemplate from 'common/layouts/admin/header.tpl';
import adminJSTemplate from 'common/layouts/admin/admin-assets-css-development.tpl';
import adminCSSTemplate from 'common/layouts/admin/admin-assets-js-development.tpl';

import ProfileController from './ProfileController';
import LayoutController from '../../common/layouts/LayoutController';
import profileTemplate from './profile.tpl';

/* @ngInject */
function ConfigureModule($stateProvider) {
  $stateProvider.state('profile', {
    url: '/profile',
    views: {
      '': {
        templateUrl: adminLayoutTemplate.name,
      },
      '@profile': {
        controller: ProfileController,
        controllerAs: 'profileCtrl',
        templateUrl: profileTemplate.name,
      },
      'header@profile': {
        controller: LayoutController,
        controllerAs: 'layoutCtrl',
        templateUrl: adminHeaderTemplate.name,
      },
      'assets-css@profile': {
        templateUrl: adminCSSTemplate.name,
      },
      'assets-js@profile': {
        templateUrl: adminJSTemplate.name,
      },
    },
    resolve: {
      isAuthToken: function ($state, $timeout, $cookieStore) {
        return $timeout(() => {
          if (!$cookieStore.get('auth_token')) {
            return $state.go('login');
          }
        }, 0);
      },
    },
  });
}

export default angular
  .module('profile', [
    dashboardModule.name,
    profileTemplate.name,
    adminLayoutTemplate.name,
    adminHeaderTemplate.name,
    adminJSTemplate.name,
    adminCSSTemplate.name,
  ])
  .config(ConfigureModule);
