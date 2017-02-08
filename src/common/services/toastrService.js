import angular from 'angular';

class ToastrService {

  /*@ngInject*/
  constructor($http, $cookieStore) {
    this.$http = $http;
    this.$cookieStore = $cookieStore;
  }

  success(msg) {
    toastr.success(msg);
  }

  warning(msg) {
    toastr.warning(msg);
  }

  error(msg) {
    toastr.error(msg);
  }

  remove() {
    toastr.remove();
  }

  clear() {
    toastr.clear();
  }
}

export default angular
  .module('common.services.toastrService', [])
  .service('ToastrService', ToastrService);
