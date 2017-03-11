import angular from 'angular';
import 'common/core';

class AdminLayoutController {
  /*@ngInject*/
  constructor($ngRedux) {
    this.$ngRedux = $ngRedux;

    this.unsubscribe = this.$ngRedux.connect(this.mapStateToThis)(this);
  }

  onDestroy() {
    this.unsubscribe();
  }

  mapStateToThis(state) {
    const { adminLayout } = state;

    return {
      adminLayout,
    };
  }
}

const component = {
  bindings: {
  },
  transclude: true,
  controller: AdminLayoutController,
  controllerAs: 'vm',
  template: `
  <div id="admin-container">
    <div class="layout-content container-fluid">
      <div calss="admim-layout">
        <div class="admin-layout__sidbar" ng-class="{false:'sm'}[vm.adminLayout.sideBarOpened]">
            <div ui-view="sidebar"></div>
        </div>
        <div class="admin-layout__main" ng-class="{false:'open'}[vm.adminLayout.sideBarOpened]">
          <div ui-view="header"></div>
          <div ui-view="content"></div>
        </div>
      </div>
    </div>
  </div>
  `,
};

export default angular
  .module('common.layout.adminLayout', [])
  .component('adminLayout', component);
