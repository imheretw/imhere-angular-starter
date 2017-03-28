import angular from 'angular';
import 'angular-mocks';
import 'angular-cookies';
import 'angular-ui-router';
import 'angular-moment';

import DialogController from './dialogController';
import listenerServiceModule from '../../common/services/listenerService';
import toastrServiceModule from '../../common/services/toastrService';

describe('DialogController', () => {
  beforeEach(() => {
    angular.mock.module('ngCookies');
    angular.mock.module('ui.router');
    angular.mock.module('angularMoment');
    angular.mock.module(listenerServiceModule.name);
    angular.mock.module(toastrServiceModule.name);
  });

  let $scope;
  let $auth;
  let createController;

  beforeEach(inject(($rootScope, $controller, $injector) => {
    $scope = {
      ngDialogData: {
        childName: 'test',
        firstTimeAddDevice: 'true',
      },
    };
    $auth = {};
    createController = () =>
      $controller(DialogController, {
        $scope,
        $auth,
      })
    ;
  }));

  it('should contains properies', () => {
    expect(createController.childName).be.defined;
  });
});
