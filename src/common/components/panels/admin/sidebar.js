import angular from 'angular';
import 'common/core';

class AdminSidebar {
  /*@ngInject*/

}

const adminSidebar = {
  bindings: {
    modules: '<',
    pageDetail: '<',
  },
  transclude: true,
  controller: AdminSidebar,
  controllerAs: 'vm',
  template: `
    <div class="admin-header">
      <ul class="nav nav-pills nav-stacked">
        <li><a>Action</a></li>
        <li><a>Another action</a></li>
        <li><a>Something else here</a></li>
        <li role="separator" class="divider"></li>
        <li><a>Separated link</a></li>
      </ul>
    </div>
  `,
};

export default angular
  .module('common.components.panels.adminSidebar', [])
  .component('adminSidebar', adminSidebar);
