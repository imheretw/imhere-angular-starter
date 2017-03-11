import angular from 'angular';
import 'common/core';

class LoginController {

  /*@ngInject*/
  constructor($state, $log, $cookieStore, authService, ToastrService, moment) {
    this.authService = authService;
    this.toastrService = ToastrService;
    this.$cookieStore = $cookieStore;
    this.$state = $state;
    this.$log = $log;
    this.moment = moment;
  }

  login() {
    if (this.validatation(this.email, this.password)) {
      this.authService.login(this.email, this.password)
        .then(
          (user) => {
            this.toastrService.success(`Login success, will redirect you to dashboard page.`);
            this.$state.go('admin');
          },
          (error) => {
            this.toastrService.error(`Unable to login, err msg: ${error}`);
          }
        );
    }
  }

  validatation(email, pass) {
    if (email && pass) {
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
  controller: LoginController,
  controllerAs: 'vm',
  template: `
  <div class="row">
    <div class="col-xs-collapse-right  col-xs-collapse-left  col-md-4 col-md-offset-4 col-xs-10 col-xs-offset-1">
      <div class="imhere-panel-container">
        <div class="imhere-panel login-panel">
          <div class="text-center bg-darkblue fg-white">
            <h3>Sign in to Imhere</h3>
          </div>

          <div class="login-form-container">
            <form autocomplete="off" ng-submit="vm.login()">
              <div class="form-group">
                <span class="input-group input-group-lg">
                  <span class="input-group-addon">
                    <span class="glyphicon glyphicon-envelope"></span>
                  </span>
                  <input type="email"
                    class="border-focus-blue form-control"
                    id="email"
                    placeholder="Enter email"
                    ng-model="vm.email"
                    name="userEmail" required/>
                </span>
              </div>
              <div class="form-group">
                <span class="input-group input-group-lg">
                  <span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span>
                  <input type="password"
                    class="border-focus-blue form-control"
                    id="password"
                    placeholder="Password"
                    ng-model="vm.password"
                    name="userPassword" required/>
                </span>
              </div>
              <div class="form-group">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-xs-collapse-right col-xs-collapse-left col-xs-6 login-form-signup">
                      <a ui-sref="register">Create a Imhere account</a>
                    </div>
                    <div class="col-xs-collapse-right  col-xs-collapse-left  text-right col-xs-6">
                      <button type="submit" ng-disabled="loginForm.$invalid" class="btn-blue btn-outlined btn btn-lg btn-default">Login</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
};

export default angular
  .module('app.auth.components.login', [])
  .component('login', component);
