import angular from 'angular';
import 'common/core';

class WidgetController {
  /*@ngInject*/
  constructor($state) {
    this.$state = $state;

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
}

const component = {
  bindings: {
  },
  transclude: true,
  controller: WidgetController,
  controllerAs: 'vm',
  template: `
  <dropdown-panel panel-title="'ADD WIDGET'">
    <add-consultant></add-consultant>
  </dropdown-panel>
  <dropdown-panel ng-repeat="widget in vm.widgets" panel-title="'WIDGET SID: '+ widget.twilio_sid">
    <h5>TOKEN: {{widget.twilio_token}}</h5>
  </dropdown-panel>
  `,
};

export default angular
  .module('app.admin.components.widget', [])
  .component('widget', component);
