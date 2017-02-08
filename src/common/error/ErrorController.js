'use strict';

export default class ErrorController {
  /*@ngInject*/
  constructor($scope, $log, $stateParams) {
    let errCtrl = this;
    this.$scope = $scope;
    this.$log = $log;
    this.title = '';
    this.content = '';

    switch ($stateParams.errCode) {
      case '404':
        errCtrl.title = $stateParams.errCode;
        errCtrl.content = 'Page not found';
        break;
      case '500':
        errCtrl.title = $stateParams.errCode;
        errCtrl.content = 'Internal server error';
        break;
      default:
        errCtrl.title = '***';
        errCtrl.content = 'Oops, something went wrong.';
        break;
    }
  }
}
