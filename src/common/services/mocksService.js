import angular from 'angular';
import mocksModule from '../mocks/mocks';

class MocksService {
  /* @ngInject */
  constructor($http, $cookieStore, apiDao) {
    this.$http = $http;
    this.$cookieStore = $cookieStore;
  }
}

export default angular
  .module('common.services.MocksService', [
    mocksModule.name,
  ])
  .service('MocksService', MocksService);
