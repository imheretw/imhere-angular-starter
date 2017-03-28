/* eslint-disable global-require */

function initialize(module) {
  [
    require('./restangularInitializer').default,
    require('./locationInitializer').default,
    require('./interceptorsInitializer').default,
    require('./reduxInitializer').default,
    require('./dialogInitializer').default,
    require('./logInitializer').default,
    require('./ocLazyLoadInitializer').default,
  ]
  .forEach(exec => exec(module));
}

export default initialize;
