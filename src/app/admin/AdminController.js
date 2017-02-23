export default class AdminController {
  /*@ngInject*/
  constructor($cookieStore, $state, authService) {
    this.$cookieStore = $cookieStore;
    this.$state = $state;
    this.authService = authService;

    this.start();
  }

  start() {
    if (this.$cookieStore.get('auth_token')) {
      this.isLogin = true;
    }

    const user = {
      name: 'ImHere',
      img: 'http://i.gbc.tw/2010/zone/lol/champion/120/lulu.png',
    };

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

    this.sideBarData = {
      logo: 'ImHere',
      user: user,
    };

    this.sideBarNav = [{
      name: 'Profile',
      state: 'admin.profile',
      icon: 'src/assets/images/user.svg',
    }, {
      name: 'Chat',
      state: 'admin.chat',
      icon: 'src/assets/images/chat.svg',
    },
    {
      name: 'Setting',
      state: 'admin.setting',
      icon: 'src/assets/images/settings.svg',
      dropdown: [{
          name: 'Widget',
          state: 'admin.setting.widget',
        },
        {
          name: 'Consultants',
          state: 'admin.setting.consultants',
        },
      ],
    }];

    this.user = user;

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
