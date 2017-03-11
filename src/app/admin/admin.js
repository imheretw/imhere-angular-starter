import angular from 'angular';
import consultantsModule from './consultants/consultants';
import widgetsModule from './widget/widget';
import profileModule from './profile/profile';
import chatModule from './chat/chat';
import settingModule from './setting/setting';
import adminComponentModule from './components/admin';
import adminLayoutModule from 'common/layouts/admin/adminLayout';
import adminPanels from 'common/components/panels/admin/admin';

import * as usersActions from 'common/redux/ducks/currentUserDuck';

/* @ngInject */
function ConfigureModule($stateProvider) {
  $stateProvider
    .state('admin', {
      url: '/admin',
      views: {
        '': {
          component: 'adminLayout',
        },
        '@admin': {
          component: 'admin',
        },
      },
      reloadOnSearch: false,
      resolve: {
        /*@ngInject*/
        auth: ($ngRedux, authService) => authService.getCurrentUser()
          .then((user) => {
            // save currentUser to store
            $ngRedux.dispatch(usersActions.setCurrentUser(user));
          }),
      },
    });
}

export default angular
  .module('app.admin', [
      consultantsModule.name,
      widgetsModule.name,
      profileModule.name,
      chatModule.name,
      settingModule.name,
      adminLayoutModule.name,
      adminComponentModule.name,
      adminPanels.name,
  ])
  .config(ConfigureModule);
