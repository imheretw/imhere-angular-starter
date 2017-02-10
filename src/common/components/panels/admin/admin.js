import angular from 'angular';
import adminHeader from './header';
import adminSidebar from './sidebar';

export default angular
  .module('common.components.panels.admin', [
      adminHeader.name,
      adminSidebar.name,
  ]);
