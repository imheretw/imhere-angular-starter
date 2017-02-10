import angular from 'angular';
import 'common/core';

class AdminSidebar {
  /*@ngInject*/

}

const adminSidebar = {
  bindings: {
    sideBarData: '<',
    sideBarNav: '<',
    onLogOut: '&',
  },
  transclude: true,
  controller: AdminSidebar,
  controllerAs: 'vm',
  template: `
    <div class="admin-sidebar">
      <div class="admin-sidebar__header">
        <i class="fa fa-github" aria-hidden="true"></i>
        {{vm.sideBarData.logo}}
      </div>
      <div class="media admin-sidebar__user">
        <div class="media-left admin-sidebar__user--img">
          <a href="#">
            <h1><i class="fa fa-user-circle-o" aria-hidden="true"></i><h1>
          </a>
        </div>
        <div class="media-body admin-sidebar__user--body">
          <p>Welcome!</p>
          <a><h5 class="media-heading">{{vm.sideBarData.user.name}}</h5></a>
        </div>
      </div>
      <ul class="nav nav-pills nav-stacked admin-sidebar__nav" ng-repeat="nav in vm.sideBarNav">
        <li ng-if="!nav.dropdown"><a ui-sref="{{nav.state}}">{{nav.name}}</a></li>
        <li class="dropdown" ng-if="nav.dropdown.length>0">
          <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
             {{nav.name}}<span class="caret"></span>
          </a>
          <ul class="dropdown-menu">
            <li ng-repeat="dropdown in nav.dropdown"><a ui-sref="{{dropdown.state}}">{{dropdown.name}}</a></li>
          </ul>
        </li>
      </ul>
      <div class="admin-sidebar__footer">
        <li ng-click="vm.onLogOut()"><a>Log Out <i class="fa fa-sign-out" aria-hidden="true"></i></a></li>
      </div>
    </div>
  `,
};

export default angular
  .module('common.components.panels.adminSidebar', [])
  .component('adminSidebar', adminSidebar);
