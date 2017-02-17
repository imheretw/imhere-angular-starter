import angular from 'angular';
import 'common/core';

class AddConsultant {
  /*@ngInject*/
  constructor() {
    this.showResponse = false;
    this.showResponseProgress = false;
  }

  addConsultant(user) {
    this.showResponse = true;
    this.showResponseProgress = true;
    this.callAddConsultantService(user);
  }

  callAddConsultantService(user) {
    this.showResponseProgress = false;
    this.afterAddConsultant({ user: user });
    this.resposeData = 'Success Add Consultant : ' + user.name;
  }

  addNew(user) {
    this.showResponse = false;
    user.name = '';
    user.email = '';
  }
}

const addConsultant = {
  bindings: {
    afterAddConsultant: '&',
  },
  transclude: true,
  controller: AddConsultant,
  controllerAs: 'vm',
  template: `
  <div class="row add-consultant">
    <div class="col-lg-5" ng-hide="vm.showResponse">
      <div class="input-group">
        <span class="input-group-addon add-consultan__icon">
          <i class="fa fa-user" aria-hidden="true"></i>
        </span>
        <input type="text" class="form-control add-consultan__input" ng-model="user.name" aria-label="..." placeholder="Name">
      </div>
    </div>
    <div class="col-lg-5" ng-hide="vm.showResponse">
      <div class="input-group">
        <span class="input-group-addon add-consultant__icon">
          <i class="fa fa-envelope-o" aria-hidden="true"></i>
        </span>
        <input type="text" class="form-control add-consultant__input" ng-model="user.email" aria-label="..." placeholder="E-mail">
      </div>
    </div>
    <div class="col-lg-2 text-right" ng-hide="vm.showResponse">
      <a class="add-consultant__btn" ng-click="vm.addConsultant(user)"><i class="fa fa-plus-circle" aria-hidden="true"></i></a>
    </div>
    <div class="col-lg-12 text-center" ng-show="vm.showResponse">
      <i class="fa fa-cog fa-spin fa-3x fa-fw" ng-show="vm.showResponseProgress"></i>
      <h3>{{vm.resposeData}}
        <a class="add-consultant__btn -right" ng-click="vm.addNew(user)"><small>Add New Consultant</small><i class="fa fa-plus-circle" aria-hidden="true"></i></a>
      </h3>
    </div>
  </div>
  `,
};

export default angular
  .module('common.components.panels.common.addConsultant', [])
  .component('addConsultant', addConsultant);
