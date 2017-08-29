import angular from 'angular';


class RegisterController {

  /* @ngInject */
  constructor($state, $cookieStore, authService, toastrService) {
    this.form = {};
    this.$state = $state;
    this.$cookieStore = $cookieStore;
    this.authService = authService;
    this.toastrService = toastrService;

    if (this.$cookieStore.get('auth_token')) {
      $state.go('dashboards');
    }
  }

  async register() {
    if (this.validatation(this.form)) {
      try {
        await this.authService.register(this.form);
        this.toastrService.success('Sign up success, please login.');
        this.$state.go('login');
      } catch (error) {
        this.toastrService.error(`Unable to sign up, error msg: ${error}`);
      }
    }
  }

  validatation({ email, password, name }) {
    if (email && password && name) {
      return true;
    }

    this.toastrService.error('Please fill out the form');
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
  <div class="row">
    <div class="col-xs-collapse-right  col-xs-collapse-left  col-md-4 col-md-offset-4 col-xs-10 col-xs-offset-1">
      <div class="imhere-panel-container">
        <div class="imhere-panel auth-panel">
          <div class="text-center bg-darkblue fg-white">
            <h3>Sign up</h3>
          </div>
          <div class="auth-form-container">
            <form autocomplete="off" ng-submit="vm.register()">
              <div class="form-group">
                <span class="input-group input-group-lg">
                  <span class="input-group-addon">
                    <span class="glyphicon glyphicon-user"></span>
                  </span>
                  <input
                    type="text" id="name" name="userName" placeholder="Name"
                    class="border-focus-blue form-control"
                    ng-model="vm.form.name" required>
                </span>
              </div>
              <div class="form-group">
                <span class="input-group input-group-lg">
                  <span class="input-group-addon">
                    <span class="glyphicon glyphicon-envelope"></span>
                  </span>
                  <input
                    class="border-focus-blue form-control"
                    type="email" id="email" name="userEmail" placeholder="support@imhere.com.tw"
                    ng-model="vm.form.email" required>
                </span>
              </div>
              <div class="form-group">
                <span class="input-group input-group-lg">
                  <span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>
                  <input
                    type="password" id="password" name="userPassword" placeholder="Password"
                    class="border-focus-blue form-control"
                    ng-model="vm.form.password" required/>
                </span>
              </div>
              <div class="form-group">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-xs-collapse-right col-xs-collapse-left col-xs-12">
                      <button type="submit" ng-disabled="registerForm.$invalid"
                        class="btn-blue btn-block btn-outlined btn btn-lg btn-default text-uppercase">
                        Create Account
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <social-signup></social-signup>
        </div>
      </div>
    </div>
  </div>
  `,
};

export default angular
  .module('app.auth.components.register', [])
  .component('register', component);
