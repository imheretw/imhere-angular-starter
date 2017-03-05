import angular from 'angular';

import { modalModule } from 'common/core';
import popupModule from 'common/components/popup';
import timeModule from 'common/components/time';
import basicLayoutModule, { layout, css } from 'common/layouts/admin/index';

import authServiceModule from 'common/services/authService';

import RegisterController from './RegisterController';
import registerTemplate from './register.tpl';

/* @ngInject */
function ConfigureModule($stateProvider) {
  $stateProvider.state('register', {
    url: '/register',
    views: {
      '': {
        templateUrl: layout.name,
      },
      '@register': {
        controller: RegisterController,
        controllerAs: 'registerCtrl',
        templateUrl: registerTemplate.name,
      },
      'assets-css@register': {
        templateUrl: css.name,
      },
    },
  });
}

export default angular
  .module('register', [
    modalModule.name,
    popupModule.name,
    timeModule.name,
    basicLayoutModule.name,
    authServiceModule.name,
    registerTemplate.name,
  ])
  .config(ConfigureModule);
