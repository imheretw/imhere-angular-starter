import angular from 'angular';

// layout
import adminLayoutModule from 'common/layouts/admin/adminLayout';

// redux actions
import * as usersActions from 'common/redux/ducks/currentUserDuck';

// components
import headerComponentModule from './components/adminHeader';
import sidebarComponentModule from './components/adminSidebar';

// routes
import consultantsModule from './consultants/consultants';
import settingModule from './setting/setting';
import widgetsModule from './widget/widget';
import profileModule from './profile/profile';
import chatModule from './chat/chat';

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

export default angular
  .module('app.admin', [
    adminLayoutModule.name,
    headerComponentModule.name,
    sidebarComponentModule.name,
    consultantsModule.name,
    widgetsModule.name,
    profileModule.name,
    chatModule.name,
    settingModule.name,
  ])
  .config(ConfigureModule);
