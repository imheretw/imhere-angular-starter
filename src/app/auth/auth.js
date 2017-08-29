/* eslint-disable global-require */

import './common/sass/auth.scss';

export default angular
  .module('app.auth', [
    require('./login/login').default.name,
    require('./register/register').default.name,
    require('./common/layouts/index').default.name,
  ]);
