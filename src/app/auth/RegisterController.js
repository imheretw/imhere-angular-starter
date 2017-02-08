export default class RegisterController {

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
      this.authService.register(this.form).then((value)=> {
        if (!value.data.error) {
          this.toastrService.success('Sign up success, please login.');
          this.$state.go('login');
        } else {
          this.toastrService.error(`Unable to sign up, error msg: ${value.data.error}`);
        }
      }, (error) => {
          this.toastrService.error(`Unable to sign up, error msg: ${error.data.error.code}`);
        });
    }
  }

  validatation({ email, password, name }) {
    if (email && password && name) {
      return true;
    }

    this.toastrService.error(`Please fill out the form`);
    return false;
  }

  goToLogin() {
    this.$state.go('login');
  }
}
