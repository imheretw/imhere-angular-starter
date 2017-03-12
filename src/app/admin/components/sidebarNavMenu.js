import angular from 'angular';

import 'common/core';

class Controller {
  $onInit() {
    this.menuItems = this.items && this.items.map((item) => new NavMenuItem(item));
  }
}

export class NavMenuItem {
  constructor(item) {
    this.name = item.name;
    this.state = item.state;
    this.icon = item.icon;
    this.dropdown = item.dropdown;

    if (this.hasDropdown()) {
      this.dropdownItems = this.dropdown.map((item) => new NavMenuDropdownItem(item));
    }
  }

  hasDropdown() {
    return this.dropdown && this.dropdown.length;
  }
}

export class NavMenuDropdownItem {
  constructor(item) {
    this.name = item.name;
    this.state = item.state;
  }
}

const component = {
  bindings: {
    'fullMode': '<',
    'items': '<',
  },
  transclude: true,
  controller: Controller,
  controllerAs: 'vm',
  template: `
  <ul class="nav nav-pills nav-stacked admin-sidebar__nav" ng-repeat="menuItem in vm.menuItems">
    <li class="nav-menu__item" ng-class="{ dropdown: menuItem.hasDropdown() }">
      <a ui-sref="{{ menuItem.state }}" is-active-item ng-if="vm.fullMode">
        <img width='15' class="admin-sidebar__nav--icon sm" ng-src="{{ menuItem.icon }}">
        {{ menuItem.name }}
        <i ng-if="menuItem.hasDropdown()" class="fa fa-chevron-down" aria-hidden="true" ></i>
      </a>
      <a ui-sref="{{ menuItem.state }}" is-active-item ng-if="!vm.fullMode">
        <img class="admin-sidebar__nav--icon" ng-src="{{ menuItem.icon }}">
      </a>
      <ul class="dropdown-item" ng-if="vm.fullMode">
        <li ng-repeat="dropdownItem in menuItem.dropdownItems">
          <a ui-sref="{{dropdownItem.state}}" is-active-item>{{ dropdownItem.name }}</a>
        </li>
      </ul>
    </li>
  </ul>
  `,
};

export default angular
  .module('app.admin.components.sidebarNavMenu', [])
  .component('sidebarNavMenu', component);
