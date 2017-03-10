import angular from 'angular';
import 'common/core';

class RegisterController {

  /*@ngInject*/
  constructor($state, $cookieStore, authService, ToastrService) {
    this.form = {};
    this.$state = $state;
    this.$cookieStore = $cookieStore;
    this.authService = authService;
    this.toastrService = ToastrService;

    if (this.$cookieStore.get('auth_token')) {
      $state.go('dashboards');
    }
  }

  register() {
    if (this.validatation(this.form)) {
      this.authService.register(this.form).then(
        (user)=> {
          this.toastrService.success('Sign up success, please login.');
          this.$state.go('login');
        },
        (error) => {
          this.toastrService.error(`Unable to sign up, error msg: ${error}`);
        }
      );
    }
  }

  validatation({ email, password, name }) {
    if (email && password && name) {
      return true;
    }

    this.toastrService.error(`Please fill out the form`);
    return false;
  }
}

const component = {
  bindings: {
  },
  transclude: true,
  controller: RegisterController,
  controllerAs: 'vm',
  template: `
  <div class="register">
    <form name="registerForm" class="form-validation register-form" ng-submit="vm.register()">
      <h3>Signup</h3>
      <div class="form-group">
        <label>Name</label>
        <input type="text"
          class="form-control"
          id="name"
          placeholder="Enter Name"
          ng-model="vm.form.name"
          name="name"
          required>
      </div>
      <span ng-show="registerForm.name.$invalid && registerForm.name.$touched"
        class="input-group form-validation-msg">
        Name field is required!
      </span>
      <div class="form-group">
        <label>Email</label>
        <input type="email"
          class="form-control"
          id="email"
          placeholder="Enter Email"
          ng-model="vm.form.email"
          name="email"
          required>
      </div>
      <div ng-if="registerForm.email.$touched">
        <span ng-show="registerForm.email.$error.email"
          class="form-validation-msg input-group">
            Email field is not valid!
        </span>
        <span ng-show="registerForm.email.$error.required"
          class="form-validation-msg input-group">
            Email field is required!
        </span>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input type="password" class="form-control" id="password" placeholder="Password" ng-model="vm.form.password" name="password" required>
      </div>
      <span ng-show="registerForm.password.$error.required && registerForm.password.$touched"
        class="form-validation-msg input-group">
          Password field is required!
      </span>
      <div class="form-group">
        <button type="submit" class="btn btn-block btn-success" ng-disabled="registerForm.$invalid">Singup</button>
        <a class="btn btn-block btn-info" ui-sref="login">Already have account...</a>
      </div>
    </form>
  </div>
  `,
};

export default angular
  .module('app.auth.components.register', [])
  .component('register', component);
