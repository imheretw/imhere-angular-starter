import angular from 'angular';
import 'angular-mocks';
import 'angular-cookies';
import 'angular-ui-router';
import 'angular-moment';
import 'ng-lodash';

import DialogController from './dialogController';
import ListenrServiceModule from '../../common/services/listener';
import ApiServiceModule from '../../common/services/apiService';
import ToastrServiceModule from '../../common/services/toastrService';

describe('LoginController', () => {
    beforeEach(() => {
      angular.mock.module('ngCookies');
      angular.mock.module('ui.router');
      angular.mock.module('angularMoment');
      angular.mock.module('ngLodash');
      angular.mock.module(ListenrServiceModule.name);
      angular.mock.module(ApiServiceModule.name);
      angular.mock.module(ToastrServiceModule.name);
    });

    let $scope;
    let $auth;
    let createController;

    beforeEach(inject(function ($rootScope, $controller, $injector) {
        $scope = {
          ngDialogData: {
            childName: 'test',
            firstTimeAddDevice: 'true',
          },
        };
        $auth = {};
        createController = function() {
            return $controller(DialogController, {
              $scope,
              $auth,
            });
          };
      }));

    it('should contains properies', () => {
      expect(createController.childName).be.defined;
    });
  });
