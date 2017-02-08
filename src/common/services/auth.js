import angular from 'angular';

class AuthService {

  /*@ngInject*/
  constructor($q, $http, $cookieStore, ApiService) {
    this.$q = $q;
    this.$http = $http;
    this.$cookieStore = $cookieStore;
    this.apiService = ApiService;
  }

  login(email, password) {
    let data = { email, password };

    return this.apiService.login(data).then(
      (response) => {
        this.$cookieStore.put('current_user', response.data.user);
        this.$cookieStore.put('auth_token', response.data.token);

        return response;
      }
    );
  }

  autoLogin(token) {
    this.$cookieStore.put('auth_token', token);

    return this.getCurrentUser().then(
      (user) => {
        this.$cookieStore.put('current_user', user);

        return user;
      }
    );
  }

  getCurrentUser() {
    return this.apiService.getCurrentUser().then(response => response.data);
  }

  logout() {
    this.$cookieStore.put('current_user', '');
    this.$cookieStore.put('auth_token', '');
    return true;
  }

  register(data) {
    return this.apiService.register(data);
  }
}

export default angular
  .module('auth', [])
  .service('authService', AuthService);
