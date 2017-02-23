export default class AdminController {
  /*@ngInject*/
  constructor($state, authService, user) {
    this.$state = $state;
    this.authService = authService;
    this.user = user;

    this.start();
  }

  start() {
    this.user.img = 'http://i.gbc.tw/2010/zone/lol/champion/120/lulu.png';

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
      user: this.user,
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
