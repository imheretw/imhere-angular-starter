import angular from 'angular';
import 'common/core';

import './authLayout.scss';

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
        <div class="container-fluid">
          <div ui-view=""></div>
        </div>
      </div>
    </div>
  </div>
  `,
};

export default angular
  .module('auth.common.layouts.authLayout', [])
  .component('authLayout', component);
