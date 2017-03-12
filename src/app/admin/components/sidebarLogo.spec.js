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

    function render(logo, fullMode) {
      inject(function($rootScope, $compile) {
        scope = $rootScope.$new();
        element = angular.element(`
          <sidebar-logo logo="logo" full-mode="fullMode"></sidebar-logo>
        `);
        scope.logo = logo;
        scope.fullMode = fullMode;
        element = $compile(element)(scope);
        scope.$apply();
      });
    }

    it('should render logo', () => {
      render(logo, true);
      let h1 = element.find('h1');

      expect(h1.text().trim()).to.eq(logo);
    });

    it('should not render logo', () => {
      render(logo, false);
      let h1 = element.find('h1');

      expect(h1.text()).to.eq.undefined;
    });
  });
});
