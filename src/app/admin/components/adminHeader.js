import angular from 'angular';
import 'common/core';

class AdminHeader {
  /*@ngInject*/
  constructor($scope, $state, $ngRedux, authService) {
    this.$ngRedux = $ngRedux;
    this.$scope = $scope;
    this.$state = $state;
    this.authService = authService;

    this.selectedUser = false;

    this.unsubscribe = this.$ngRedux.connect(this.mapStateToThis)(this);

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
  }

  onUserLinkClick() {
    this.selectedUser = !this.selectedUser;
  }

  logout() {
    if (this.authService.logout()) {
      this.$state.go('login');
    }
  }

  toggleSidebar() {
    // TODO call switch sidebar action
  }

  mapStateToThis(state) {
    const { currentUser } = state;

    return {
      currentUser,
    };
  }
}

const adminHeader = {
  bindings: {
  },
  transclude: true,
  controller: AdminHeader,
  controllerAs: 'vm',
  template: `
    <div class="navbar navbar-default admin-header">
      <div class="navbar-header">
        <a class="navbar-brand admin-header__btn" ng-click="vm.toggleSidebar()">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </a>
      </div>
      <ul class="nav navbar-nav pull-right admin-header__nav" >
        <li><a><img width='20' class="admin-header__nav--icon" src="dist/assets/images/bell.png"></a></li>
        <li class="dropdown" ng-class = "{true:'active'}[vm.selectedUser]">
          <a class="admin-header__user" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" ng-click="vm.onUserLinkClick()">
            <div class="admin-header__user--img" style="background-image: url({{vm.currentUser.img}});" ></div>
            {{vm.currentUser.name}} <span class="caret"></span>
          </a>
          <ul class="admin-header__dropdown-menu">
            <li ng-repeat="link in vm.headerLinks"><a ui-sref="{{link.state}}" ng-click="vm.onUserLinkClick()">{{link.name}}</a></li>
            <li ng-click="vm.logout()"><a>Log Out <i class="fa fa-sign-out admin-header__dropdown-menu--logout" aria-hidden="true"></i></a></li>
          </ul>
        </li>
      </ul>
    </div>
  `,
};

export default angular
  .module('common.components.panels.adminHeader', [])
  .component('adminHeader', adminHeader);
