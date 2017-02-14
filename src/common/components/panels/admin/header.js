import angular from 'angular';
import 'common/core';

class AdminHeader {
  /*@ngInject*/
  constructor() {
    this.selectedUser = false;
  }

  onUserLinkClick() {
    this.selectedUser = !this.selectedUser;
  }
}

const adminHeader = {
  bindings: {
    linkDatas: '<',
    user: '<',
    onLogOut: '&',
    onClickIcon: '&',
  },
  transclude: true,
  controller: AdminHeader,
  controllerAs: 'vm',
  template: `
    <div class="navbar navbar-default admin-header">
      <div class="navbar-header">
        <a class="navbar-brand admin-header__btn" ng-click="vm.onClickIcon()">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </a>
      </div>
      <ul class="nav navbar-nav pull-right admin-header__nav" >
        <li><a><img width='20' class="admin-header__nav--icon" src="src/assets/images/bell.png"></a></li>
        <li class="dropdown" ng-class = "{true:'active'}[vm.selectedUser]">
          <a class="admin-header__user" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" ng-click="vm.onUserLinkClick()">
            <div class="admin-header__user--img" style="background-image: url({{vm.user.img}});" ></div>
            {{vm.user.name}} <span class="caret"></span>
          </a>
          <ul class="admin-header__dropdown-menu">
            <li ng-repeat="link in vm.linkDatas"><a ui-sref="{{link.state}}" ng-click="vm.onUserLinkClick()">{{link.name}}</a></li>
            <li ng-click="vm.onLogOut()"><a>Log Out <i class="fa fa-sign-out admin-header__dropdown-menu--logout" aria-hidden="true"></i></a></li>
          </ul>
        </li>
      </ul>
    </div>
  `,
};

export default angular
  .module('common.components.panels.adminHeader', [])
  .component('adminHeader', adminHeader);
