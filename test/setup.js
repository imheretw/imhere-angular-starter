var mockCssModules = require('mock-css-modules');
mockCssModules.register(['.sass', '.scss', '.css']);

const noop = () => {};

require.extensions['.ico'] = noop;
require.extensions['.png'] = noop;
require.extensions['.svg'] = noop;
require.extensions['.jpg'] = noop;

// see this links for how to integrate mocha + webpack + angular
// https://gist.github.com/rikukissa/dcb422eb3b464cc184ae
// http://dev.cravefood.services/2017/01/13/fast-unit-test-with-reactjs.html

delete require.cache[require.resolve('angular')];
delete require.cache[require.resolve('angular/angular')];
delete require.cache[require.resolve('angular-mocks')];

global.$ = global.jQuery = window.$ = window.jQuery = require('jquery');

require('angular/angular');

global.angular = window.angular;

global.setUpTests = function() {
  global.mocha = window.mocha = true;
  window.beforeEach = beforeEach;
  window.afterEach = afterEach;

  require('angular-mocks');

  global.inject = global.angular.mock.inject;
  global.ngModule = global.angular.mock.module;
  global.expect = require('chai').expect;
};
