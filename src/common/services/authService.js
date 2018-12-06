import angular from 'angular';
import UserModule from '../models/User';

class AuthService {

  /* @ngInject */
  constructor($cookies, User) {
    this.$cookies = $cookies;
    this.User = User;
  }

  login(email, password) {
    const data = { email, password };

    return this.User.login(data)
      .then(
        (user) => {
          this.$cookies.putObject('current_user', user);
          this.$cookies.putObject('auth_token', user.token);

          return user;
        }
      );
  }

  getCurrentUser() {
    return this.User.getCurrentUser();
  }

  logout() {
    this.$cookies.putObject('current_user', '');
    this.$cookies.putObject('auth_token', '');
    return true;
  }

  register(data) {
    return this.User.register(data);
  }
}

export default angular
  .module('auth', [
    UserModule.name,
  ])
  .service('authService', AuthService);
