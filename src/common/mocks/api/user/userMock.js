import angular from 'angular';
import Mock from '../../Mock';
import appConfig from 'common/config/appConfig.json';
import currentUser from './data/current.json';
import login from './data/login.json';
import register from './data/register.json';

class UserMock extends Mock {

  /* @ngInject */
  constructor($httpBackend) {
    super($httpBackend);

    this.urlMapping = [
      { method: 'GET', url: '/api/users/current', data: currentUser },
      { method: 'POST', url: '/api/users/login', data: login },
      { method: 'POST', url: '/api/users', data: register },
    ];
  }

  start() {
    this.register();
  }
}

/* @ngInject */
function run($injector) {
  const userMock = $injector.get('userMock');
  if (appConfig.api.mock) {
    userMock.start();
  }
}

export default angular
  .module('common.mocks.api.userMock', [])
  .service('userMock', UserMock)
  .run(run);
