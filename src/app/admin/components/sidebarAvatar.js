import angular from 'angular';

class SidebarAvatarController {
}

const component = {
  bindings: {
    user: '<',
    fullMode: '<',
  },
  transclude: true,
  controller: SidebarAvatarController,
  controllerAs: 'vm',
  template: `
  <div class="media admin-sidebar__user" ng-if="vm.fullMode">
    <div class="media-left">
      <a ui-sref="admin.profile">
        <div class="admin-sidebar__user--img" style="background-image: url({{ vm.user.img }});">1</div>
      </a>
    </div>
    <div class="media-body admin-sidebar__user--body">
      <p>Welcome!</p>
      <a ui-sref="admin.profile"><h5 class="media-heading">{{ vm.user.name }}</h5></a>
    </div>
  </div>
  `,
};

export default angular
  .module('app.admin.components.sidebarAvatar', [])
  .component('sidebarAvatar', component);
