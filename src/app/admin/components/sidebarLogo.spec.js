import angular from 'angular';
import 'angular-mocks';
import sidebarLogoModule from './sidebarLogo';

describe('Component: sidebarLogo', function() {
  beforeEach(() => {
    angular.mock.module(sidebarLogoModule.name);
  });

  let element;
  let scope;

  describe('UI', function() {
    function init(logo, fullMode) {
      inject(function($rootScope, $compile) {
        scope = $rootScope.$new();
        element = angular.element('<sidebar-logo logo="logo" full-mode="fullMode"></sidebar-logo>');
        element = $compile(element)(scope);
        scope.logo = logo;
        scope.fullMode = fullMode;
        scope.$apply();
      });
    }

    let logo = 'logo';
    let fullMode = true;

    it('should render logo', () => {
      init(logo, fullMode);
      var h1 = element.find('h1');
      expect(h1.text().trim()).to.eq(logo);
    });

    it('should not render logo', () => {
      fullMode = false;
      init(logo, fullMode);
      var h1 = element.find('h1');
      expect(h1.text()).to.eq.undefined;
    });
  });
});
