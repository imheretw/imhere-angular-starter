import angular from 'angular';

import 'common/core';
import ReduxController from 'common/controllers/ReduxController';
import isActiveItem from 'common/directives/isActiveItem';
import sidebarNavMenuModule from './sidebarNavMenu';

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
    <div class="admin-sidebar">
      <div class="admin-sidebar__header">
        <h1 ng-show="vm.adminLayout.sideBarOpened">
          <i class="fa fa-github" aria-hidden="true"></i>
          {{vm.logo}}
        </h1>
        <h1 ng-show="!vm.adminLayout.sideBarOpened">
          <i class="fa fa-github" aria-hidden="true"></i>
        </h1>

      </div>
      <div class="media admin-sidebar__user" ng-show="vm.adminLayout.sideBarOpened">
        <div class="media-left ">
          <a ui-sref="admin.profile">
            <div class="admin-sidebar__user--img" style="background-image: url({{vm.currentUser.img}});"></div>
          </a>
        </div>
        <div class="media-body admin-sidebar__user--body">
          <p>Welcome!</p>
          <a ui-sref="admin.profile"><h5 class="media-heading">{{vm.currentUser.name}}</h5></a>
        </div>
      </div>
      <sidebar-nav-menu items="vm.sideBarNav" full-mode="vm.adminLayout.sideBarOpened"></sidebar-nav-menu>
      <div class="admin-sidebar__footer" ng-class="{false:'sm'}[vm.adminLayout.sideBarOpened]">
        <a ng-click="vm.logout()" ng-show="vm.adminLayout.sideBarOpened">Log Out  <i class="fa fa-sign-out" aria-hidden="true"></i></a>
        <a ng-click="vm.logout()" ng-show="!vm.adminLayout.sideBarOpened"><h4><i class="fa fa-sign-out" aria-hidden="true"></i></h4></a>
      </div>
    </div>
  `,
};

export default angular
  .module('common.components.panels.admin.sidebar', [
    sidebarNavMenuModule.name,
    isActiveItem.name,
  ])
  .component('adminSidebar', adminSidebar);
