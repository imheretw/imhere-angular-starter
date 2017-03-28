import angular from 'angular';
import 'angular-mocks';
import 'angular-cookies';
import 'ng-dialog';
import dialogServiceModule from './dialogService';

describe('DialogService', () => {
  beforeEach(() => {
    angular.mock.module('ngCookies');
    angular.mock.module('ngDialog');
    angular.mock.module(dialogServiceModule.name);
  });

  let dialogService;

  beforeEach(inject(($injector) => {
    dialogService = $injector.get('dialogService');
  }));

  describe('.openDialogOptionsHelper', () => {
    const options = {
      child: {
        id: 1,
        name: 'ed',
      },
      device: {
        id: 1,
      },
    };

    it('return empty object for demoDialog', () => {
      const finalOptions = dialogService.openDialogOptionsHelper('demoDialog', options);

      expect(finalOptions).be.deep.eq({});
    });
  });
});
