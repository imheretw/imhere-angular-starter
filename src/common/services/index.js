/* eslint-disable global-require */

export default angular
  .module('common.services', [
    require('./authService').default.name,
    require('./listenerService').default.name,
    require('./mocksService').default.name,
    require('./reduxService').default.name,
    require('./toastrService').default.name,
  ]);
