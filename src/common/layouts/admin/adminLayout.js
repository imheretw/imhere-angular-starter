import angular from 'angular';
import 'common/core';

class AdminLayout {
}

const adminLayout = {
  bindings: {
    afterAddConsultant: '&',
  },
  transclude: true,
  controller: AdminLayout,
  controllerAs: 'vm',
  template: `
  <div id="admin-container">
    <div class="layout-content container-fluid">
      <div ui-view=""></div>
    </div>
  </div>
  `,
};

export default angular
  .module('common.layout.adminLayout', [])
  .component('adminLayout', adminLayout);
