import angular from 'angular';
import pageHeader from './pageHeader';

export default angular
  .module('common.components.panels.common', [
      pageHeader.name,
  ]);
