import angular from 'angular';

class SidebarLogoutController {
}

const component = {
  bindings: {
    fullMode: '<',
    onLogout: '&',
  },
  transclude: true,
  controller: SidebarLogoutController,
  controllerAs: 'vm',
  template: `
  <div class="admin-sidebar__footer" ng-class="{ false: 'sm' }[vm.fullMode]">
    <a ng-click="vm.onLogout()" ng-show="vm.fullMode">Log Out  <i class="fa fa-sign-out" aria-hidden="true"></i></a>
    <a ng-click="vm.onLogout()" ng-show="!vm.fullMode"><h4><i class="fa fa-sign-out" aria-hidden="true"></i></h4></a>
  </div>
  `,
};

export default angular
  .module('admin.common.components.sidebarLogout', [])
  .component('sidebarLogout', component);
