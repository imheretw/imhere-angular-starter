import angular from 'angular';
import mocksModule from '../mocks/mocks';

class MocksService {
  /* @ngInject */
  constructor($http, apiDao) {
    this.$http = $http;
  }
}

export default angular
  .module('common.services.MocksService', [
    mocksModule.name,
  ])
  .service('MocksService', MocksService);
