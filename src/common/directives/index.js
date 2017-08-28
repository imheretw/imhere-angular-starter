/* eslint-disable global-require */

export default angular
  .module('common.directives', [
    require('./dropdownPanel/dropdownPanel').default.name,
  ]);
