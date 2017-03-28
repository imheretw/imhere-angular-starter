export default function initialize(module) {
  module.config((RestangularProvider) => {
    RestangularProvider.setBaseUrl('/api');
  });
}
