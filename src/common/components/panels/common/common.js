import angular from 'angular';
import pageHeader from './pageHeader';
import addConsultant from './addConsultant';

export default angular
  .module('common.components.panels.common', [
    pageHeader.name,
    addConsultant.name,
  ]);
