import angular from 'angular';
import _ from 'lodash';

import DialogController from 'common/dialog/dialogController';

class DialogService {

  /* @ngInject */
  constructor($log, $location, ngDialog) {
    this.$log = $log;
    this.ngDialog = ngDialog;
    this.$location = $location;
    this.openDialogMap = {
      demoDialog: {},
    };
  }

  openDialog(routeDialog, options) {
    if (routeDialog) {
      const finalOptions = this.openDialogOptionsHelper(routeDialog, options);
      this[routeDialog](finalOptions);
    }
  }

  openDialogOptionsHelper(routeDialog, options) {
    const returnOptions = {};
    const finalOptions = _.map(this.openDialogMap[routeDialog], val => ({ [val]: options[val] }));
    _.forEach(finalOptions, (data) => {
      _.forEach(Object.keys(data), (item) => { returnOptions[item] = data[item]; });
    });
    return returnOptions;
  }

  demoDialog() {
    this.$location.search('dialog', 'demoDialog');
    const demoDialog = this.ngDialog.open({
      template: 'common/dialog/dialog.tpl.html',
      controllerAs: 'dialogCtrl',
      controller: DialogController,
      className: 'ngdialog-theme-default custom-full-screen custom-pc-width',
      showClose: false,
      data: JSON.stringify({ method: 'demoDialog' }),
    });
    demoDialog.closePromise.then(() => {
      this.$location.search('dialog', null);
    });
  }
}

export default angular
  .module('DialogService', [])
  .service('dialogService', DialogService);
