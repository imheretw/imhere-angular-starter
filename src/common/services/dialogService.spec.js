import angular from 'angular';
import 'angular-mocks';
import 'angular-cookies';
import 'ng-lodash';
import 'ng-dialog';
import dialogServiceModule from './dialogService';

describe('DialogService', function() {
  beforeEach(() => {
    angular.mock.module('ngCookies');
    angular.mock.module('ngDialog');
    angular.mock.module('ngLodash');
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

    it('return empty object for addChild', function() {
      const finalOptions = dialogService.openDialogOptionsHelper('addChild', options);

      expect(finalOptions).be.deep.eq({});
    });

    it('return object with child for deleteChild', function() {
      const finalOptions = dialogService.openDialogOptionsHelper('deleteChild', options);
      expect(finalOptions.child).be.eq(options.child);
    });

    it('return object with child for addDevice', function() {
      const finalOptions = dialogService.openDialogOptionsHelper('addDevice', options);

      expect(finalOptions.child).be.eq(options.child);
    });

    it('return object with child and device for deleteDevice', function() {
      const finalOptions = dialogService.openDialogOptionsHelper('deleteDevice', options);
      expect(finalOptions.child).be.eq(options.child);
      expect(finalOptions.device).be.eq(options.device);
    });

    it('return array with child and device for openModule', function() {
      let options = {
        child: { id: 1, name: 'Kos' },
        device: { id: 2 },
        module: { id: 'test' },
      };

      const finalOptions = dialogService.openDialogOptionsHelper('openModule', options);

      expect(finalOptions.child.id).be.eq(options.child.id);
      expect(finalOptions.child.name).be.eq(options.child.name);
      expect(finalOptions.device.id).be.eq(options.device.id);
      expect(finalOptions.module.id).be.eq(options.module.id);
    });

    it('return empty array for openFreeTrial', function() {
      const finalOptions = dialogService.openDialogOptionsHelper('openFreeTrial', options);

      expect(finalOptions).be.deep.eq({});
    });
  });

});
