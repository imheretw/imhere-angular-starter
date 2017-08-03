import angular from 'angular';
import sidebarAvatarModule from './sidebarAvatar';

global.setUpTests();

describe('Component: sidebarAvatar', () => {
  beforeEach(() => {
    angular.mock.module(sidebarAvatarModule.name);
  });

  describe('UI', () => {
    const DIV_SELECTOR = '.admin-sidebar__user--img';
    const H5_SELECTOR = 'h5.media-heading';

    let element;
    let scope;
    const userData = {
      name: 'kos',
      img: 'test/img.png',
    };

    function render(user, fullMode) {
      inject(($rootScope, $compile) => {
        scope = $rootScope.$new();
        element = angular.element(`
          <sidebar-avatar user="user" full-mode="fullMode"></sidebar-avatar>
        `);
        scope.user = user;
        scope.fullMode = fullMode;
        element = $compile(element)(scope);
        scope.$apply();
      });
    }

    it('should render image and user name', () => {
      render(userData, true);
      const div = element.find(DIV_SELECTOR);
      const h5 = element.find(H5_SELECTOR);

      expect(div.css('background-image')).to.include(userData.img);
      expect(h5.text()).to.eq(userData.name);
    });

    it('should not render image and user name', () => {
      render(userData, false);
      const div = element.find(DIV_SELECTOR);
      const a = element.find(H5_SELECTOR);

      expect(div.length).to.eq(0);
      expect(a.length).to.eq(0);
    });
  });
});
