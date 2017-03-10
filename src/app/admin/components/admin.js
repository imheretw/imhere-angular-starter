import angular from 'angular';
import 'common/core';

class AdminController {
  /*@ngInject*/
  constructor($scope, $state, $ngRedux, authService) {
    this.$scope = $scope;
    this.$state = $state;
    this.$ngRedux = $ngRedux;
    this.authService = authService;

    this.start();
  }

  start() {
    this.unsubscribe = this.$ngRedux.connect(this.mapStateToThis)(this);

    this.$scope.$on('$destroy', this.unsubscribe);

    this.logo = 'ImHere';

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

const admin = {
  bindings: {
  },
  transclude: true,
  controller: AdminController,
  controllerAs: 'vm',
  template: `
  <div calss="admim-layout">
    <div class="admin-layout__sidbar" ng-class="{false:'sm'}[vm.sidbarOpen]">
      <admin-sidebar user="vm.currentUser" logo="vm.logo" side-bar-nav="vm.sideBarNav" on-log-out="vm.logout()" side-bar-open="vm.sidbarOpen"></admin-sidebar>
    </div>
    <div class="admin-layout__main" ng-class="{false:'open'}[vm.sidbarOpen]">
      <admin-header link-datas="vm.headerLinks" user="vm.currentUser" on-log-out="vm.logout()" on-click-icon="vm.chagneSidebar()"></admin-header>
      <div ui-view="content"></div>
    </div>
  </div>
  `,
};

export default angular
  .module('app.admin.components.admin', [])
  .component('admin', admin);
