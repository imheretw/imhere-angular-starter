import angular from 'angular';
import 'common/core';

class AuthLayout {
}

const component = {
  bindings: {
  },
  transclude: true,
  controller: AuthLayout,
  controllerAs: 'vm',
  template: `
  <div id="auth-container">
    <div id="auth-row">
      <div id="auth-cell">
        <div class="layout-content container-fluid">
          <div ui-view=""></div>
        </div>
      </div>
    </div>
  </div>
  `,
};

export default angular
  .module('common.layout.authLayout', [])
  .component('authLayout', component);
