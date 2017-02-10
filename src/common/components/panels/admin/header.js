import angular from 'angular';
import 'common/core';

class AdminHeader {
  /*@ngInject*/

}

const adminHeader = {
  bindings: {
    modules: '<',
    pageDetail: '<',
  },
  transclude: true,
  controller: AdminHeader,
  controllerAs: 'vm',
  template: `
    <div class="navbar navbar-default admin-header">
      <div class="navbar-header">
        <a class="navbar-brand" >
          <i class="fa fa-bars" aria-hidden="true"></i>
        </a>
      </div>
      <ul class="nav navbar-nav pull-right">
        <li><a><i class="fa fa-bell" aria-hidden="true"></i></a></li>
        <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
            <i class="fa fa-user-circle" aria-hidden="true"></i>
            ImHere <span class="caret"></span>
          </a>
          <ul class="dropdown-menu">
            <li><a ui-sref="admin.chat">Action</a></li>
            <li><a>Another action</a></li>
            <li><a>Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a>Separated link</a></li>
          </ul>
        </li>
      </ul>
    </div>
  `,
};

export default angular
  .module('common.components.panels.adminHeader', [])
  .component('adminHeader', adminHeader);
