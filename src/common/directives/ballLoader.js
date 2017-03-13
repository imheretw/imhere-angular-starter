import angular from 'angular';
import 'common/core';
import ballLoaderTemplate from 'common/directives/template/ballLoader.tpl.html';

/*@ngInject*/
function directive($state) {
  return {
    replace: true,
    retrict: 'AE',
    transclude: true,
    templateUrl: ballLoaderTemplate.name,
  };
}

export default angular
  .module('common.directive.ballLoader', [])
  .directive('ballLoader', directive);
