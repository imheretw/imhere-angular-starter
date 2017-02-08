import angular from 'angular';
import appConfig from '../config/appConfig.json!';
import apiDaoModule from './dao/apiDao';
import apiMockDaoModule from './dao/apiMockDao';

class ApiService {

  /*@ngInject*/
  constructor($http, $cookieStore, apiDao, apiMockDao) {
    this.$http = $http;
    this.$cookieStore = $cookieStore;
    this.dao = appConfig.apiService.mock ? apiMockDao : apiDao;
  }

  //Auth API
  login(data) {
    return this.dao.login(data);
  }

  register(data) {
    return this.dao.register(data);
  }

  getCurrentUser() {
    return this.dao.getCurrentUser();
  }
}

export default angular
  .module('common.services.ApiService', [apiDaoModule.name, apiMockDaoModule.name])
  .service('ApiService', ApiService);
