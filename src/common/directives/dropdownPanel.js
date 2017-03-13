import angular from 'angular';
import 'common/core';
import dropdownPanelTemplate from 'common/directives/template/dropdownPanel.tpl.html';

/*@ngInject*/
function directive($state) {
  return {
    replace: true,
    retrict: 'AE',
    transclude: true,
    templateUrl: dropdownPanelTemplate.name,
    scope: {
      panelTitle: '=',
    },
    link: link,
  };

  function link(scope, el, attrs) {
    scope.isOpen = true;
    scope.close = close;
    scope.open = open;

    function close() {
      scope.isOpen = false;
    }

    function open() {
      scope.isOpen = true;
    }

  }
}

export default angular
  .module('common.directive.dropdownPanel', [])
  .directive('dropdownPanel', directive);
