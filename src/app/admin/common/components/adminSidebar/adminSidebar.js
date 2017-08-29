import angular from 'angular';

import ReduxController from 'common/controllers/ReduxController';
import isActiveItem from 'common/directives/isActiveItem';

import './adminSidebar.scss';

class Controller extends ReduxController {
  /* @ngInject */
  constructor($scope, $state, $ngRedux, authService) {
    super($ngRedux);

    this.$scope = $scope;
    this.$state = $state;
    this.authService = authService;

    this.logo = 'ImHere';
    this.adminLayout.sideBarOpened = true;
    this.sideBarNav = [{
      name: 'Profile',
      state: 'admin.profile',
      icon: 'images/user.svg',
    }, {
      name: 'Chat',
      state: 'admin.chat',
      icon: 'images/chat.svg',
    },
    {
      name: 'Setting',
      state: 'admin.setting',
      icon: 'images/settings.svg',
      dropdown: [{
        name: 'Widget',
        state: 'admin.setting.widget',
      },
      {
        name: 'Consultants',
        state: 'admin.setting.consultants',
      }],
    }];
  }

  logout() {
    if (this.authService.logout()) {
      this.$state.go('login');
    }
  }

  mapStateToThis(state) {
    const { currentUser, adminLayout } = state;

    return {
      currentUser,
      adminLayout,
    };
  }
}

const component = {
  bindings: {
  },
  transclude: true,
  controller: Controller,
  controllerAs: 'vm',
  template: `
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-12 col-xs-collapse-left col-xs-collapse-right">
        <div class="admin-sidebar">
          <sidebar-logo logo="vm.logo" full-mode="vm.adminLayout.sideBarOpened"></sidebar-logo>
          <sidebar-avatar user="vm.currentUser" full-mode="vm.adminLayout.sideBarOpened"></sidebar-avatar>
          <sidebar-nav-menu items="vm.sideBarNav" full-mode="vm.adminLayout.sideBarOpened"></sidebar-nav-menu>
          <sidebar-logout on-logout="vm.logout()" full-mode="vm.adminLayout.sideBarOpened"></sidebar-logout>
        </div>
      </div>
    </div>
  </div>
  `,
};

export default angular
  .module('admin.common.components.admin.sidebar', [
    isActiveItem.name,
  ])
  .component('adminSidebar', component);
