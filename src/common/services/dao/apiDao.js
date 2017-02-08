import angular from 'angular';

class ApiDao {

  /*@ngInject*/
  constructor($http) {
    this.$http = $http;
  }

  login(data) {
    return this.$http.post('/api/users/login', data);
  }

  register(data) {
    return this.$http.post('/api/users', data);
  }

  getCurrentUser() {
    return this.$http.get('/api/users/current');
  }
}

export default angular
  .module('common.services.dao.ApiDao', [])
  .service('apiDao', ApiDao);
