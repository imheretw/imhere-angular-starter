export default class AdminController {
  /*@ngInject*/
  constructor($cookieStore, $state, authService) {
    this.$cookieStore = $cookieStore;
    this.$state = $state;
    this.authService = authService;

    if (this.$cookieStore.get('auth_token')) {
      this.isLogin = true;
    }

    this.headerLinks = [{
      name: 'My Profile',
      state: 'admin.profile',
    }, {
      name: 'Chat',
      state: 'admin.chat',
    }, {
      name: 'Setting',
      state: 'admin.setting',
    }];

    this.user =  {
      name: 'ImHere',
    };

    this.sidbarOpen = true;

  }

  logout() {
    if (this.authService.logout()) {
      this.$state.go('login');
    }
  }

  chagneSidebar() {
    this.sidbarOpen = !this.sidbarOpen;
  }

}
