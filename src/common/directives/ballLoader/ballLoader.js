import angular from 'angular';
import 'common/core';
import ballLoaderTemplate from './ballLoader.tpl.html';

import './ballLoader.scss';

/* @ngInject */
function directive($state) {
  return {
    replace: true,
    retrict: 'AE',
    transclude: true,
    template: ballLoaderTemplate,
  };
}

export default angular
  .module('common.directive.ballLoader', [])
  .directive('ballLoader', directive);
