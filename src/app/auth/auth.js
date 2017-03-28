import login from './login/login';
import register from './register/register';

export default angular
  .module('app.auth', [
    login.name,
    register.name,
  ]);
