import mocksServiceModule from './services/mocksService';
import toastrServiceModule from './services/toastrService';
import authServiceModule from './services/authService';
import dialogModule from './services/dialogService';
import listenerServiceModule from './services/listenerService';
import authInterceptor from './utils/auth-interceptors';
import errorInterceptor from './utils/error-interceptors';
import dialogService from './dialog/dialog';

export default angular
  .module('core', [
    mocksServiceModule.name,
    toastrServiceModule.name,
    authServiceModule.name,
    authInterceptor.name, toastrServiceModule.name, dialogService.name,
    dialogModule.name, errorInterceptor.name,
  ]);
