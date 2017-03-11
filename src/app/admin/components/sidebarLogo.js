import angular from 'angular';

import 'common/core';

class SidebarLogoController {
}

const component = {
  bindings: {
    logo: '<',
    fullMode: '<',
  },
  transclude: true,
  controller: SidebarLogoController,
  controllerAs: 'vm',
  template: `
  <div class="admin-sidebar__header">
    <h1>
      <i class="fa fa-github" aria-hidden="true"></i>
      <span ng-if="vm.fullMode">{{ vm.logo }}</span>
    </h1>
  </div>
  `,
};

export default angular
  .module('app.admin.components.sidebarLogo', [])
  .component('sidebarLogo', component);
