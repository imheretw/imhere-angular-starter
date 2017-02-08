import angular from 'angular';
import 'angular-mocks';
import userModule from './user';

describe('CurrentUser', function() {
  beforeEach(angular.mock.module(userModule.name));

  var CurrentUser;
  var scope;

  beforeEach(inject(function($injector) {
    CurrentUser = $injector.get('CurrentUser');
    scope = $injector.get('$rootScope');
  }));

  describe('.get', function() {
    it('has a user', function() {
      var user;
      CurrentUser.getUser().then(function(data) {
        user = data;
      });

      scope.$digest();

      expect(user).to.deep.eq({ name: 'Panda' });
    });
  });

});
