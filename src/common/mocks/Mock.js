export default class Mock {
  /* @ngInject */
  constructor($httpBackend) {
    this.$httpBackend = $httpBackend;
    this.urlMapping = [];
  }

  register() {
    this.urlMapping.forEach((setting) => {
      this.$httpBackend
        .when(setting.method, setting.url)
        .respond((method, url, data) => [200, setting.data, {}]);
    });
  }
}
