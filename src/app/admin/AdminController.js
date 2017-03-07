import * as usersActions from 'common/redux/actions/userActions';

export default class AdminController {
  /*@ngInject*/
  constructor($scope, $state, $ngRedux, authService, user) {
    this.$scope = $scope;
    this.$state = $state;
    this.$ngRedux = $ngRedux;
    this.authService = authService;
    this.user = user;

    this.start();
  }

  start() {
    this.unsubscribe = this.$ngRedux.connect(this.mapStateToThis, usersActions)(this);
    this.setCurrentUser(this.user);

    this.$scope.$on('$destroy', this.unsubscribe);

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

  // Which part of the Redux global state does our component want to receive?
  mapStateToThis(state) {
    const { currentUser } = state;

    return {
      currentUser,
    };
  }

}
