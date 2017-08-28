export default class ErrorController {
  /* @ngInject */
  constructor($scope, $log, $stateParams) {
    const vm = this;
    this.$scope = $scope;
    this.$log = $log;
    this.title = '';
    this.content = '';

    switch ($stateParams.errCode) {
      case '404':
        vm.title = $stateParams.errCode;
        vm.content = 'Page not found';
        break;
      case '500':
        vm.title = $stateParams.errCode;
        vm.content = 'Internal server error';
        break;
      default:
        vm.title = '***';
        vm.content = 'Oops, something went wrong.';
        break;
    }
  }
}
