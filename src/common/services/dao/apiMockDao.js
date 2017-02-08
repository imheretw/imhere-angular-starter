import angular from 'angular';
import loginData from '../../mockData/auth/login.json!';

class ApiMockDao {

  /*@ngInject*/
  constructor($q, $http) {
    this.$q = $q;
    this.$http = $http;
  }

  login(data) {
    return Promise.resolve(this.warpResponse(loginData));
  }

  register(data) {
    return this.$http.post('/api/users', data);
  }

  warpResponse(mockData) {
    return { data: mockData };
  }
}

export default angular
  .module('common.services.dao.ApiMockDao', [])
  .service('apiMockDao', ApiMockDao);
