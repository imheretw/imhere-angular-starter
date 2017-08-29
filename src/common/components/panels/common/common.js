/* eslint-disable global-require */

import angular from 'angular';

export default angular
  .module('common.components.panels.common', [
    require('./pageHeader/pageHeader').default.name,
  ]);
