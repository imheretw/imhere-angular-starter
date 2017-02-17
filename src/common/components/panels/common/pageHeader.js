import angular from 'angular';
import 'common/core';

class PageHeader {
  /*@ngInject*/
  constructor() {
    this.selectOthers = false;
  }

  onClickOthers() {
    this.selectOthers = !this.selectOthers;
  }
}

const pageHeader = {
  bindings: {
    title: '<',
    tab: '<',
    list: '<',
  },
  transclude: true,
  controller: PageHeader,
  controllerAs: 'vm',
  template: `
    <div class="pannel-page-header">
      <div class="pannel-page-header__header" ng-if="vm.title">
        <h1 class="pannel-page-header__title">{{vm.title}}<h1>
      </div>
      <div class="pannel-page-header__main">
        <ul class="list-inline pannel-page-header__tab" ng-if="vm.tab.length > 0">
          <li ng-repeat="tab in vm.tab" ><a ui-sref="{{tab.state}}" is-active-item>{{tab.name}}</a></li>
        </ul>
        <ul class="list-inline pannel-page-header__list text-right" ng-if="vm.list.consultants.length > 0">
          <li ng-if="vm.list.unassigned.length > 0">
            <a>Unassigned ({{vm.list.unassigned.length}})</a>
          </li>
          <li ng-repeat="item in vm.list.consultants | limitTo: 5" >
            <a><i class="pannel-page-header__list--icon" aria-hidden="true"></i>
            {{item.name}} ({{item.msgListNumb}})
            </a>
          </li>
          <li class="pannel-page-header__list--dropdown" ng-class="{true:'active'}[vm.selectOthers]"ng-show="vm.list.consultants.length > 5" ng-click="vm.onClickOthers()">
            <a>Others ({{vm.list.consultants.length - 5}}) <i class="fa fa-chevron-down" aria-hidden="true"></i></a>
            <ul class="pannel-page-header__list--dropdown-item" >
              <li ng-repeat="itme in vm.list.consultants | limitTo: vm.list.consultants.length : 5">
                <a><i class="pannel-page-header__list--dropdown-item-icon" aria-hidden="true"></i> {{itme.name}} ({{itme.msgListNumb}}) </a>
              </li>
            </ul>
          </li>
        </ul>
      <div>
    </div>
  `,
};

export default angular
  .module('common.components.panels.common.pageHeader', [])
  .component('pageHeader', pageHeader);
