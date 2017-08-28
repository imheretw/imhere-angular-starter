/* eslint-disable global-require */

export default angular
  .module('admin.common.components', [
    require('./adminHeader').default.name,
    require('./adminSidebar').default.name,
    require('./sidebarAvatar').default.name,
    require('./sidebarLogo').default.name,
    require('./sidebarLogout').default.name,
    require('./sidebarNavMenu').default.name,
  ]);
