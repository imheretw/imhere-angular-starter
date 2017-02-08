export default class LoginController {

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
        .then(() => {
          this.toastrService.success(`Login success, will redirect you to dashboard page.`);
          this.$state.go('dashboards');
        })
        .catch((response) => {
          this.toastrService.error(`Unable to login, err msg: ${response.data.error}`);
        });
    }
  }

  validatation(email, pass) {
    if (email && pass) {
      return true;
    }

    this.toastrService.error(`Please fill out the form`);
    return false;
  }

  goToRegister() {
    this.$state.go('register');
  }
}
