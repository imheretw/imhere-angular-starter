import angular from 'angular';
import 'common/core';

/*@ngInject*/
function directive($state) {
  return {
    replace: true,
    retrict: 'AE',
    transclude: true,
    templateUrl: 'src/common/directives/template/ballLoader.tpl.html',
  };
}

export default angular
  .module('common.directive.ballLoader', [])
  .directive('ballLoader', directive);
