import 'ui-router-extras';
import futureRoutes from 'app/routes.json!';

var routing = function(module) {

  module.requires.push('ct.ui.router.extras.future');

  var RouterConfig = ['$stateProvider', '$futureStateProvider', function ($stateProvider, $futureStateProvider) {

    $futureStateProvider.stateFactory('load', ['$q', '$ocLazyLoad', '$log', 'futureState',
      function($q, $ocLazyLoad, $log, futureState) {
        var def = $q.defer();

        System.import(futureState.src).then(loaded => {
          var newModule = loaded;
          if (!loaded.name) {
            var key = Object.keys(loaded);
            newModule = loaded[key[1]];
          }

          $ocLazyLoad.load(newModule).then(function() {
            def.resolve();
          }, function() {
            $log.debug('error loading: ' + loaded.name);
          });
        });

        return def.promise;
      }]);

    futureRoutes.forEach(function(r) {
      $futureStateProvider.futureState(r);
    });

  }];

  return RouterConfig;
};

export default routing;
