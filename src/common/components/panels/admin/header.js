import angular from 'angular';
import 'common/core';

class AdminHeader {
  /*@ngInject*/

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
        <a class="navbar-brand" ng-click="vm.onClickIcon()">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </a>
      </div>
      <ul class="nav navbar-nav pull-right">
        <li><a><i class="fa fa-bell" aria-hidden="true"></i></a></li>
        <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
            {{vm.user.name}} <span class="caret"></span>
          </a>
          <ul class="dropdown-menu">
            <li ng-repeat="link in vm.linkDatas"><a ui-sref="{{link.state}}">{{link.name}}</a></li>
            <li role="separator" class="divider"></li>
            <li ng-click="vm.onLogOut()"><a>Log Out <i class="fa fa-sign-out" aria-hidden="true"></i></a></li>
          </ul>
        </li>
      </ul>
    </div>
  `,
};

export default angular
  .module('common.components.panels.adminHeader', [])
  .component('adminHeader', adminHeader);
