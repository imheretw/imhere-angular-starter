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

  goToLogin() {
    this.$state.go('login');
  }
}
