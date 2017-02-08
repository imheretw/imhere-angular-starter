import angular from 'angular';

class ListenrService {

  /*@ngInject*/
  constructor($rootScope) {
    this.$rootScope = $rootScope;

    const actions = [
      { action: 'updateMenu',     actionName: 'UPDATE_MENU' },
      { action: 'updateChilds',   actionName: 'UPDATE_CHILDS' },
      { action: 'updateChild',    actionName: 'UPDATE_CHILD' },
      { action: 'updateDevices',  actionName: 'UPDATE_DEVICES' },
      { action: 'updateDevice',   actionName: 'UPDATE_DEVICE' },
      { action: 'updateModules',  actionName: 'UPDATE_Modules' },
      { action: 'updateModule',   actionName: 'UPDATE_MODULES' },
      { action: 'syncDevice',     actionName: 'SYNC_DEVICE' },
      { action: 'syncDeviceEnd',  actionName: 'SYNC_DEVICE_END' },
      { action: 'syncLocation',  actionName: 'SYNC_LOCATION' },
      { action: 'syncPhone',  actionName: 'SYNC_PHONE' },
      { action: 'syncBrowser',  actionName: 'SYNC_BROWSER' },
      { action: 'syncChat',  actionName: 'SYNC_CHAT' },
      { action: 'syncPhoto',  actionName: 'SYNC_PHOTO' },
    ];
    actions.forEach(({ action, actionName }) => {
      this[action] = () => this.$rootScope.$broadcast(actionName);
    });
  }
}

export default angular
  .module('listenr', [])
  .service('ListenrService', ListenrService);
