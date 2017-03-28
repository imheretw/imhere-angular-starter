import angular from 'angular';
import apiMockModule from './api/apiMock';

/* @ngInject */
function run($httpBackend) {
  $httpBackend.when('GET').passThrough();
  $httpBackend.when('POST').passThrough();
}

export default angular
  .module('common.mocks', [
    apiMockModule.name,
  ])
  .run(run);
