export default function initialize(module) {
  module.config(['ngDialogProvider', function (ngDialogProvider) {
    ngDialogProvider.setDefaults({
      closeByDocument: false,
    });
  }]);
}
