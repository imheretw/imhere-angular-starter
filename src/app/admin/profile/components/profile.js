import angular from 'angular';

import ReduxController from 'common/controllers/ReduxController';

class ProfileController extends ReduxController {
  /* @ngInject */
  constructor($scope, $state, $ngRedux) {
    super($ngRedux);

    this.$scope = $scope;
    this.$state = $state;

    this.start();
  }

  start() {
    const widgets = [
      {
        twilio_sid: '1231313d',
        twilio_token: 'XDDKXDDDEXDDEDDEDDD',
      },
      {
        twilio_sid: '1231313d',
        twilio_token: 'XDDKXDDDEXDDEDDEDDD',
      },
    ];
    this.widgets = widgets;
  }

  // Which part of the Redux global state does our component want to receive?
  mapStateToThis(state) {
    const { currentUser } = state;

    return {
      currentUser,
    };
  }
}

const profile = {
  bindings: {
  },
  transclude: true,
  controller: ProfileController,
  controllerAs: 'vm',
  template: `
  <page-header title="'My Profile'"></page-header>
  <div class="container-fluid scrollow-able-container">
    <dropdown-panel>
      <div class="row">
        <div class="col-md-2">
          <img ng-src="{{ vm.currentUser.img }}" class="img-circle" width="150">
        </div>
        <div class="col-md-10">
          <dl class="dl-horizontal">
            <dt><h3>{{ vm.currentUser.name }}</h3></dt>
            <dd></dd>
          </dl>
          <dl class="dl-horizontal">
            <dt><small>E-mail</small></dt>
            <dd>{{ vm.currentUser.email }}</dd>
          </dl>
          <dl class="dl-horizontal">
            <dt><small>Join at</small></dt>
            <dd>{{ vm.currentUser.createdAt() | date: 'yyyy/MM/dd' }}</dd>
          </dl>
        </div>
      </div>
    </dropdown-panel>
  </div>
  `,
};

export default angular
  .module('app.admin.components.profile', [])
  .component('profile', profile);
