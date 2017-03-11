import angular from 'angular';

import 'common/core';

class SidebarNavMenuController {
}

const component = {
  bindings: {
    'fullMode': '<',
    'items': '<',
  },
  transclude: true,
  controller: SidebarNavMenuController,
  controllerAs: 'vm',
  template: `
  <ul class="nav nav-pills nav-stacked admin-sidebar__nav" ng-repeat="nav in vm.items">
    <li ng-if="!nav.dropdown">
      <a ui-sref="{{nav.state}}" is-active-item ng-show="vm.fullMode">
        <img width='15' class="admin-sidebar__nav--icon sm" ng-src="{{nav.icon}}">
        {{nav.name}}
      </a>
      <a ui-sref="{{nav.state}}" is-active-item ng-show="!vm.fullMode">
        <img class="admin-sidebar__nav--icon" ng-src="{{nav.icon}}">
        <p class="admin-sidebar__nav--smname"> {{nav.name}}</p>
      </a>
    </li>
    <li class="dropdown" ng-if="nav.dropdown.length>0">
      <a ui-sref="{{nav.state}}" is-active-item ng-show="vm.fullMode">
        <img width='15' class="admin-sidebar__nav--icon sm" ng-src="{{nav.icon}}">
        {{nav.name}}<i class="fa fa-chevron-down" aria-hidden="true" ></i>
      </a>
      <a ui-sref="{{nav.state}}" is-active-item ng-show="!vm.fullMode">
        <img class="admin-sidebar__nav--icon" ng-src="{{nav.icon}}">
        <p class="admin-sidebar__nav--smname"> {{nav.name}}</p>
      </a>
      <ul class="dropdown-item" ng-show="vm.fullMode">
        <li ng-repeat="dropdown in nav.dropdown"><a ui-sref="{{dropdown.state}}" is-active-item>{{dropdown.name}}</a></li>
      </ul>
    </li>
  </ul>
  `,
};

export default angular
  .module('app.admin.components.sidebarNavMenu', [])
  .component('sidebarNavMenu', component);
