import angular from 'angular';
import 'angular-mocks';
import sidebarLogoModule from './sidebarLogo';

describe('Component: sidebarLogo', function() {
  beforeEach(() => {
    angular.mock.module(sidebarLogoModule.name);
  });

  describe('UI', function() {
    let element;
    let scope;
    let logo = 'logo';
    let fullMode = true;

    function init(logo, fullMode) {
      inject(function($rootScope, $compile) {
        scope = $rootScope.$new();
        element = angular.element(`
          <sidebar-logo logo="logo" full-mode="fullMode"></sidebar-logo>
        `);
        element = $compile(element)(scope);
        scope.logo = logo;
        scope.fullMode = fullMode;
        scope.$apply();
      });
    }

    it('should render logo', () => {
      init(logo, fullMode);
      let h1 = element.find('h1');

      expect(h1.text().trim()).to.eq(logo);
    });

    it('should not render logo', () => {
      fullMode = false;
      init(logo, fullMode);
      let h1 = element.find('h1');

      expect(h1.text()).to.eq.undefined;
    });
  });
});
