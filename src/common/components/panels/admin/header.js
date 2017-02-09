import angular from 'angular';
import 'common/core';

class AdminHeader {
  /*@ngInject*/

}

const adminHeader = {
  bindings: {
    modules: '<',
    pageDetail: '<',
  },
  transclude: true,
  controller: AdminHeader,
  controllerAs: 'vm',
  template: `
    <div>2131312</div>
  `,
};

export default angular
  .module('common.components.panels..adminHeader', [])
  .component('adminHeader', adminHeader);
