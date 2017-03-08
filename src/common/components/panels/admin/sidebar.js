import angular from 'angular';
import 'common/core';
import isActiveItem from 'common/directives/isActiveItem';

class AdminSidebar {
  /*@ngInject*/
}

const adminSidebar = {
  bindings: {
    user: '<',
    logo: '<',
    sideBarNav: '<',
    onLogOut: '&',
    sideBarOpen: '=',
  },
  transclude: true,
  controller: AdminSidebar,
  controllerAs: 'vm',
  template: `
    <div class="admin-sidebar">
      <div class="admin-sidebar__header">
        <h1 ng-show="vm.sideBarOpen">
          <i class="fa fa-github" aria-hidden="true"></i>
          {{vm.logo}}
        </h1>
        <h1 ng-show="!vm.sideBarOpen">
          <i class="fa fa-github" aria-hidden="true"></i>
        </h1>

      </div>
      <div class="media admin-sidebar__user" ng-show="vm.sideBarOpen">
        <div class="media-left ">
          <a ui-sref="admin.profile">
            <div class="admin-sidebar__user--img" style="background-image: url({{vm.user.img}});"></div>
          </a>
        </div>
        <div class="media-body admin-sidebar__user--body">
          <p>Welcome!</p>
          <a ui-sref="admin.profile"><h5 class="media-heading">{{vm.user.name}}</h5></a>
        </div>
      </div>
      <ul class="nav nav-pills nav-stacked admin-sidebar__nav" ng-repeat="nav in vm.sideBarNav">
        <li ng-if="!nav.dropdown">
          <a ui-sref="{{nav.state}}" is-active-item ng-show="vm.sideBarOpen">
            <img width='15' class="admin-sidebar__nav--icon sm" ng-src="{{nav.icon}}">
            {{nav.name}}
          </a>
          <a ui-sref="{{nav.state}}" is-active-item ng-show="!vm.sideBarOpen">
            <img class="admin-sidebar__nav--icon" ng-src="{{nav.icon}}">
            <p class="admin-sidebar__nav--smname"> {{nav.name}}</p>
          </a>
        </li>
        <li class="dropdown" ng-if="nav.dropdown.length>0">
          <a ui-sref="{{nav.state}}" is-active-item ng-show="vm.sideBarOpen">
            <img width='15' class="admin-sidebar__nav--icon sm" ng-src="{{nav.icon}}">
            {{nav.name}}<i class="fa fa-chevron-down" aria-hidden="true" ></i>
          </a>
          <a ui-sref="{{nav.state}}" is-active-item ng-show="!vm.sideBarOpen">
            <img class="admin-sidebar__nav--icon" ng-src="{{nav.icon}}">
            <p class="admin-sidebar__nav--smname"> {{nav.name}}</p>
          </a>
          <ul class="dropdown-item" ng-show="vm.sideBarOpen">
            <li ng-repeat="dropdown in nav.dropdown"><a ui-sref="{{dropdown.state}}" is-active-item>{{dropdown.name}}</a></li>
          </ul>
        </li>
      </ul>
      <div class="admin-sidebar__footer" ng-class="{false:'sm'}[vm.sideBarOpen]">
        <a ng-click="vm.onLogOut()" ng-show="vm.sideBarOpen">Log Out  <i class="fa fa-sign-out" aria-hidden="true"></i></a>
        <a ng-click="vm.onLogOut()" ng-show="!vm.sideBarOpen"><h4><i class="fa fa-sign-out" aria-hidden="true"></i></h4></a>
      </div>
    </div>
  `,
};

export default angular
  .module('common.components.panels.admin.sidebar', [isActiveItem.name])
  .component('adminSidebar', adminSidebar);
