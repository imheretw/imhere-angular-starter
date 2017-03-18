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
  .forEach((initialize) => initialize(module))
}

export default initialize;
