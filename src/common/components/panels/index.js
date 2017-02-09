import angular from 'angular';
import adminHeader from './adminHeader';
import adminSidebar from './adminSidebar';

export default angular
  .module('common.components.panels', [
      adminHeader.name,
      adminSidebar.name,
  ]);
