import angular from 'angular';
import 'common/core';

class AdminSettingController {
  /*@ngInject*/
  constructor($state) {
    this.$state = $state;
    const tabs = [
      {
        name: 'Consultants',
        state: 'admin.setting.consultants',
      },
      {
        name: 'Widget',
        state: 'admin.setting.widget',
      },
    ];
    this.settingTabs = tabs;
  }
}

const component = {
  bindings: {
  },
  transclude: true,
  controller: AdminSettingController,
  controllerAs: 'vm',
  template: `
  <page-header tab="vm.settingTabs"></page-header>
  <div  class="container-fluid scrollow-able-container" ui-view="setting-content"></div>
  `,
};

export default angular
  .module('app.admin.components.setting', [])
  .component('setting', component);
