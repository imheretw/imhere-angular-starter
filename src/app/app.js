import angular from 'angular';

import coreModule from 'common/core';
import adminModule from './admin/admin';
import authModule from './auth/auth';

// import 'toastr/build/toastr.min.css';
// import 'ng-dialog/css/ngDialog.css';
// import 'ng-dialog/css/ngDialog-theme-default.css';
// import 'ng-dialog/css/ngDialog-theme-plain.css';
import '../assets/app.scss';

const app = angular.module('app', [
  coreModule.name,
  adminModule.name,
  authModule.name,
]);

angular.element(document).ready(() => {
  angular.bootstrap(document.body, [app.name], {
    strictDi: true,
  });
});

export default app;
