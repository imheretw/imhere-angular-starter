import angular from 'angular';
import UserModule from '../models/User';

class AuthService {

  /*@ngInject*/
  constructor($q, $http, $cookieStore, ApiService, User) {
    this.$q = $q;
    this.$http = $http;
    this.$cookieStore = $cookieStore;
    this.apiService = ApiService;
    this.User = User;
  }

  login(email, password) {
    let data = { email, password };

    return this.User.login(data)
      .then(
        (user) => {
          this.$cookieStore.put('current_user', user);
          this.$cookieStore.put('auth_token', user.token);

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
  .module('auth', [
    UserModule.name,
  ])
  .service('authService', AuthService);
