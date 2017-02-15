import angular from 'angular';
import 'common/core';

class PageHeader {
  /*@ngInject*/
}

const pageHeader = {
  bindings: {
    headerName: '<',
    tab: '<',
    list: '<',
  },
  transclude: true,
  controller: PageHeader,
  controllerAs: 'vm',
  template: `
    <div class="pannel-page-header">
      <div class="pannel-page-header__header" ng-if="vm.headerName">
        <h1 class="pannel-page-header__title">{{vm.headerName}}<h1>
      </div>
      <div class="pannel-page-header__main">
        <ul class="list-inline pannel-page-header__tab" ng-if="vm.tab.length > 0">
          <li ng-repeat="tab in vm.tab" ><a ui-sref="{{tab.state}}" is-active-item>{{tab.name}}</a></li>
        </ul>
      <div>
    </div>
  `,
};

export default angular
  .module('common.components.panels.common.pageHeader', [])
  .component('pageHeader', pageHeader);
