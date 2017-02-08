// TODO extract dialogController
export default class LayoutController {

  /*@ngInject*/
  constructor($cookieStore, $state, authService) {
    this.$cookieStore = $cookieStore;
    this.$state = $state;
    this.authService = authService;

    if (this.$cookieStore.get('auth_token')) {
      this.isLogin = true;
    }
  }

  logout() {
    if (this.authService.logout()) {
      this.$state.go('login');
    }
  }
}
