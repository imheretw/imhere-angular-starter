import angular from 'angular';
import 'common/core';

class AddConsultant {
  /*@ngInject*/
}

const addConsultant = {
  bindings: {
  },
  transclude: true,
  controller: AddConsultant,
  controllerAs: 'vm',
  template: `
  <div class="row add-consultant">
    <div class="col-lg-5">
      <div class="input-group">
        <span class="input-group-addon add-consultan__icon">
          <i class="fa fa-user" aria-hidden="true"></i>
        </span>
        <input type="text" class="form-control add-consultan__input" aria-label="..." placeholder="Name">
      </div>
    </div>
    <div class="col-lg-5">
      <div class="input-group">
        <span class="input-group-addon add-consultant__icon">
          <i class="fa fa-envelope-o" aria-hidden="true"></i>
        </span>
        <input type="text" class="form-control add-consultant__input" aria-label="..." placeholder="E-mail">
      </div>
    </div>
    <div class="col-lg-2 text-right">
      <a class="add-consultant__btn"><i class="fa fa-plus-circle" aria-hidden="true"></i></a>
    </div>
  </div>
  `,
};

export default angular
  .module('common.components.panels.common.addConsultant', [])
  .component('addConsultant', addConsultant);
