import angular from 'angular';
import 'angular-mocks';
import sidebarLogoModule from './sidebarLogo';

describe('Component: sidebarLogo', () => {
  beforeEach(() => {
    angular.mock.module(sidebarLogoModule.name);
  });

  describe('UI', () => {
    let element;
    let scope;
    const LOGO = 'logo';

    function render(logo, fullMode) {
      inject(($rootScope, $compile) => {
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
      render(LOGO, true);
      const h1 = element.find('h1');

      expect(h1.text().trim()).to.eq(LOGO);
    });

    it('should not render logo', () => {
      render(LOGO, false);
      const h1 = element.find('h1');

      expect(h1.text()).to.eq.undefined;
    });
  });
});
