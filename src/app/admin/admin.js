/* eslint-disable global-require */

import angular from 'angular';

// layout
import layout from 'common/layouts/index';

// redux actions
import * as usersActions from 'common/redux/ducks/currentUserDuck';
import reducers from './common/redux/reducers';

// components
import components from './common/components/index';

/* @ngInject */
function ConfigureModule($stateProvider) {
  $stateProvider
    .state('admin', {
      url: '/admin',
      views: {
        '': {
          component: 'adminLayout',
        },
        'sidebar@admin': {
          component: 'adminSidebar',
        },
        'header@admin': {
          component: 'adminHeader',
        },
      },
      reloadOnSearch: false,
      resolve: {
        /* @ngInject */
        auth: ($ngRedux, authService) => authService.getCurrentUser()
          .then((user) => {
            // save currentUser to store
            $ngRedux.dispatch(usersActions.setCurrentUser(user));
          }),
      },
    });
}

/* @ngInject */
function run(reduxService) {
  reduxService.injectAsyncReducers(reducers);
}

export default angular
  .module('app.admin', [
    layout.name,
    components.name,

    require('./consultants/consultants').default.name,
    require('./setting/setting').default.name,
    require('./widget/widget').default.name,
    require('./profile/profile').default.name,
    require('./chat/chat').default.name,
  ])
  .config(ConfigureModule)
  .run(run);
