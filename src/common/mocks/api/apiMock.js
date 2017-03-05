import angular from 'angular';
import userMockModule from './user/userMock';

export default angular
  .module('common.mocks.api', [
    userMockModule.name,
  ]);
