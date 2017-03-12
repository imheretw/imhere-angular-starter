import angular from 'angular';

import 'common/core';
import ReduxController from 'common/controllers/ReduxController';
import isActiveItem from 'common/directives/isActiveItem';
import sidebarLogoModule from './sidebarLogo';
import sidebarAvatarModule from './sidebarAvatar';
import sidebarNavMenuModule from './sidebarNavMenu';
import sidebarLogoutModule from './sidebarLogout';

class AdminSidebarController extends ReduxController {
  /*@ngInject*/
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
      icon: 'dist/assets/images/user.svg',
    }, {
      name: 'Chat',
      state: 'admin.chat',
      icon: 'dist/assets/images/chat.svg',
    },
    {
      name: 'Setting',
      state: 'admin.setting',
      icon: 'dist/assets/images/settings.svg',
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

const adminSidebar = {
  bindings: {
  },
  transclude: true,
  controller: AdminSidebarController,
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
  .module('common.components.panels.admin.sidebar', [
    sidebarLogoModule.name,
    sidebarAvatarModule.name,
    sidebarNavMenuModule.name,
    sidebarLogoutModule.name,
    isActiveItem.name,
  ])
  .component('adminSidebar', adminSidebar);
