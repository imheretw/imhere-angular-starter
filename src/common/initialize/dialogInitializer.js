export default function initialize(module) {
  module.config(['ngDialogProvider', (ngDialogProvider) => {
    ngDialogProvider.setDefaults({
      closeByDocument: false,
    });
  }]);
}
