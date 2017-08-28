import angular from 'angular';

import styles from './addConsultant.module.scss';

class AddConsultant {
  /* @ngInject */
  constructor() {
    this.showResponse = false;
    this.showResponseProgress = false;
    this.styles = styles;
  }

  addConsultant(user) {
    this.showResponse = true;
    this.showResponseProgress = true;
    this.callAddConsultantService(user);
  }

  callAddConsultantService(user) {
    this.showResponseProgress = false;
    this.afterAddConsultant({ user });
    this.resposeData = `Success Add Consultant : ${user.name}`;
  }

  addNew(user) {
    this.showResponse = false;
    user.name = '';
    user.email = '';
  }
}

const component = {
  bindings: {
    afterAddConsultant: '&',
  },
  controller: AddConsultant,
  controllerAs: 'vm',
  template: `
  <div class="row" ng-class="vm.styles['add-consultant']">
    <div class="col-lg-5" ng-hide="vm.showResponse">
      <div class="input-group">
        <span class="input-group-addon">
          <i class="fa fa-user" aria-hidden="true"></i>
        </span>
        <input type="text" class="form-control" ng-model="user.name" aria-label="..." placeholder="Name">
      </div>
    </div>
    <div class="col-lg-5" ng-hide="vm.showResponse">
      <div class="input-group">
        <span class="input-group-addon">
          <i class="fa fa-envelope-o" aria-hidden="true"></i>
        </span>
        <input type="text" class="form-control" ng-model="user.email" aria-label="..." placeholder="E-mail">
      </div>
    </div>
    <div class="col-lg-2 text-right" ng-hide="vm.showResponse">
      <a ng-class="vm.styles.btn" ng-click="vm.addConsultant(user)"><i class="fa fa-plus-circle" aria-hidden="true"></i></a>
    </div>
    <div class="col-lg-12 text-center" ng-show="vm.showResponse">
      <i class="fa fa-cog fa-spin fa-3x fa-fw" ng-show="vm.showResponseProgress"></i>
      <h3>{{vm.resposeData}}
        <a ng-class="vm.styles.btn + ' ' + vm.styles.right" ng-click="vm.addNew(user)"><small>Add New Consultant</small><i class="fa fa-plus-circle" aria-hidden="true"></i></a>
      </h3>
    </div>
  </div>
  `,
};

export default angular
  .module('admin.consultants.components.addConsultant', [])
  .component('addConsultant', component);
