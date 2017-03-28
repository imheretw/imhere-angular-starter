import angular from 'angular';
import UserModule from '../models/User';

class AuthService {

  /* @ngInject */
  constructor($cookieStore, User) {
    this.$cookieStore = $cookieStore;
    this.User = User;
  }

  login(email, password) {
    const data = { email, password };

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
    return this.User.getCurrentUser();
  }

  logout() {
    this.$cookieStore.put('current_user', '');
    this.$cookieStore.put('auth_token', '');
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
