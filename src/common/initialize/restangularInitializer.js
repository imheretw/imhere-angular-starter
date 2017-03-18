export default function initialize(module) {
  module.config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('/api');
  });
}
