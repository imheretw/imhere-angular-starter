import angular from 'angular';
import 'angular-mocks';
import sidebarAvatarModule from './sidebarAvatar';

describe('Component: sidebarAvatar', function() {
  beforeEach(() => {
    angular.mock.module(sidebarAvatarModule.name);
  });

  describe('UI', function() {
    const DIV_SELECTOR = '.admin-sidebar__user--img';
    const H5_SELECTOR = 'h5.media-heading';

    let element;
    let scope;
    let user = {
      name: 'kos',
      img: 'test/img.png',
    };
    let fullMode = true;

    function init(user, fullMode) {
      inject(function($rootScope, $compile) {
        scope = $rootScope.$new();
        element = angular.element(`
          <sidebar-avatar user="user" full-mode="fullMode"></sidebar-avatar>
        `);
        element = $compile(element)(scope);
        scope.user = user;
        scope.fullMode = fullMode;
        scope.$apply();
      });
    }

    it('should render image and user name', () => {
      init(user, fullMode);
      let div = element.find(DIV_SELECTOR);
      let h5 = element.find(H5_SELECTOR);

      expect(div.css('background-image')).to.include(user.img);
      expect(h5.text()).to.eq(user.name);
    });

    it('should not render image and user name', () => {
      fullMode = false;
      init(user, fullMode);
      let div = element.find(DIV_SELECTOR);
      let a = element.find(H5_SELECTOR);

      expect(div).to.eq.undefined;
      expect(a).to.eq.undefined;
    });
  });
});