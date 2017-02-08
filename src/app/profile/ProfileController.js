export default class ProfileController {

  /*@ngInject*/
  constructor($scope, $log, $location, $state, $stateParams, $cookieStore, ngDialog, $rootScope) {
    this.$state = $state;
    this.$cookieStore = $cookieStore;
    this.tabName = 'personal-info';

    this.getUserProfile();
  }

  getUserProfile() {
    this.tabName = 'personal-info';
    this.user = this.$cookieStore.get('current_user');
  }
}
