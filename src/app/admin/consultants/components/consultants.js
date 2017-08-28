import angular from 'angular';
import _ from 'lodash';

class ConsultantsController {
  /* @ngInject */
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
    const consultants = [
      {
        name: 'Coomy',
        email: 'test1@gmail.com',
        img: 'https://avatars0.githubusercontent.com/coomysky',
      },
      {
        name: 'Kos',
        email: 'test2@gmail.com',
        img: 'https://lh3.googleusercontent.com/-OPHrjqsA4eY/AAAAAAAAAAI/AAAAAAAAExw/xFY-JBMy4Vo/s640/photo.jpg',
      },
      {
        name: 'jassic',
        email: 'test3@gmail.com',
        img: 'https://avatars0.githubusercontent.com/coomysky',
      },
      {
        name: 'ken',
        email: 'test4@gmail.com',
        img: 'https://avatars0.githubusercontent.com/coomysky',
      },
    ];
    this.settingTabs = tabs;
    this.consultants = consultants;
  }

  addConsultant(user) {
    const consultant = _.cloneDeep(user);
    consultant.img = 'https://avatars0.githubusercontent.com/coomysky';
    this.consultants = [consultant, ...this.consultants];
  }
}

const consultants = {
  bindings: {
  },
  controller: ConsultantsController,
  controllerAs: 'vm',
  template: `
  <dropdown-panel panel-title="'ADD CONSULTANTS'">
    <add-consultant after-add-consultant="vm.addConsultant(user)"></add-consultant>
  </dropdown-panel>

  <dropdown-panel panel-title="'CONSULTANTS'">
    <table class="table table-hover">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr ng-repeat="consultant in vm.consultants">
          <td><img ng-src="{{consultant.img}}" width="30"class="img-circle"></td>
          <td>{{consultant.name}}</td>
          <td>{{consultant.email}}</td>
        </tr>
      </tbody>
    </table>
  </dropdown-panel>
  `,
};

export default angular
  .module('app.admin.components.consultants', [])
  .component('consultants', consultants);
