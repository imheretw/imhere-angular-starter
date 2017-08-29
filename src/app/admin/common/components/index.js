/* eslint-disable global-require */

export default angular
  .module('admin.common.components', [
    require('./addConsultant/addConsultant').default.name,
    require('./adminHeader/adminHeader').default.name,
    require('./adminSidebar/adminSidebar').default.name,
    require('./sidebarAvatar').default.name,
    require('./sidebarLogo').default.name,
    require('./sidebarLogout').default.name,
    require('./sidebarNavMenu').default.name,
  ]);
