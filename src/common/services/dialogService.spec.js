import angular from 'angular';
import 'angular-mocks';
import 'angular-cookies';
import 'ng-dialog';
import dialogServiceModule from './dialogService';

describe('DialogService', function() {
  beforeEach(() => {
    angular.mock.module('ngCookies');
    angular.mock.module('ngDialog');
    angular.mock.module(dialogServiceModule.name);
  });

  var dialogService;

  beforeEach(inject(function($injector) {
    dialogService = $injector.get('dialogService');
  }));

  describe('.openDialogOptionsHelper', function() {
    let options = {
      child: {
        id: 1,
        name: 'ed',
      },
      device: {
        id: 1,
      },
    };

    it('return empty object for demoDialog', function() {
      const finalOptions = dialogService.openDialogOptionsHelper('demoDialog', options);

      expect(finalOptions).be.deep.eq({});
    });
  });

});
