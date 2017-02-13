import angular from 'angular';
import 'common/core';
import isActiveItem from 'common/directives/isActiveItem';

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
        <h1>
          <i class="fa fa-github" aria-hidden="true"></i>
          {{vm.sideBarData.logo}}
        </h1>
      </div>
      <div class="media admin-sidebar__user">
        <div class="media-left ">
          <a ui-sref="admin.profile">
            <div class="admin-sidebar__user--img" style="background-image: url(http://i.gbc.tw/2010/zone/lol/champion/120/lulu.png);"></div>
          </a>
        </div>
        <div class="media-body admin-sidebar__user--body">
          <p>Welcome!</p>
          <a ui-sref="admin.profile"><h5 class="media-heading">{{vm.sideBarData.user.name}}</h5></a>
        </div>
      </div>
      <ul class="nav nav-pills nav-stacked admin-sidebar__nav" ng-repeat="nav in vm.sideBarNav">
        <li ng-if="!nav.dropdown"  ><a ui-sref="{{nav.state}}" is-active-item>{{nav.name}}</a></li>
        <li class="dropdown" ng-if="nav.dropdown.length>0">
          <a ui-sref="{{nav.state}}" is-active-item>
             {{nav.name}}<i class="fa fa-chevron-down" aria-hidden="true"></i>
          </a>
          <ul class="dropdown-item">
            <li ng-repeat="dropdown in nav.dropdown"><a ui-sref="{{dropdown.state}}" is-active-item>{{dropdown.name}}</a></li>
          </ul>
        </li>
      </ul>
      <div class="admin-sidebar__footer">
        <a ng-click="vm.onLogOut()">Log Out  <i class="fa fa-sign-out" aria-hidden="true"></i></a>
      </div>
    </div>
  `,
};

export default angular
  .module('common.components.panels.admin.sidebar', [isActiveItem.name])
  .component('adminSidebar', adminSidebar);
