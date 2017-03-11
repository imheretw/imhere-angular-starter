import angular from 'angular';
import 'common/core';

/*@ngInject*/
function directive($state, $transitions) {
  return {
    restrict: 'AE',
    link: link,
  };

  function link(scope, el, attrs) {
    updateClass($state.current, el, attrs);
    $transitions.onSuccess({}, function(trans) {
      trans.promise.then((state) => {
        updateClass(state, el, attrs);
      });
    });
  }
}

function updateClass(state, el, attrs) {
  const ref = attrs.uiSref && attrs.uiSref.replace(/\(.*?$/, '');
  if (!ref) {
    return;
  }

  var isActive = state.name === ref || (state.name.search(ref) >= 0 && state.name.split('.').length !== ref.split('.').length);
  if (isActive) {
    el.closest('li').addClass('active');
  } else {
    el.closest('li').removeClass('active');
  }
}

export default angular
  .module('common.directive.isActiveItem', [])
  .directive('isActiveItem', directive);
