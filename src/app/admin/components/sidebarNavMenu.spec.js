import angular from 'angular';
import 'angular-mocks';
import sidebarNavMenuModule from './sidebarNavMenu';

describe('Component: sidebarNavMenu', function() {
  beforeEach(() => {
    angular.mock.module(sidebarNavMenuModule.name);
  });

  describe('UI', function() {
    const NAV_SELECTOR = '.nav';
    const ICON_SELECTOR = '.admin-sidebar__nav--icon';

    let element;
    let scope;
    let item;
    let navElm;
    let menuItemElm;
    let menuItemIconElm;
    let menuItemName;
    let items = [
      {
        name: 'Profile',
        state: 'admin.profile',
        icon: 'dist/assets/images/user.svg',
      },
      {
        name: 'Setting',
        state: 'admin.setting',
        icon: 'dist/assets/images/settings.svg',
        dropdown: [{
            name: 'Widget',
            state: 'admin.setting.widget',
          },
          {
            name: 'Consultants',
            state: 'admin.setting.consultants',
          },
        ],
      },
    ];

    function render(items, fullMode) {
      inject(function($rootScope, $compile) {
        scope = $rootScope.$new();
        element = angular.element(`
          <sidebar-nav-menu items="items" full-mode="fullMode"></sidebar-nav-menu>
        `);
        scope.items = items;
        scope.fullMode = fullMode;
        element = $compile(element)(scope);
        scope.$apply();
      });
    }

    function preloadVariables(index, dropdown) {
      const dropdownClass = dropdown ? '.dropdown' : '';
      item = items[index];
      navElm = element.find(`${NAV_SELECTOR}:eq(${index})`);
      menuItemElm = navElm.find(`.nav-menu__item${dropdownClass} a:eq(0)`);
      menuItemIconElm = menuItemElm.find(ICON_SELECTOR);
      menuItemName = menuItemElm.text().trim();
    }

    it('should two navs in full mode', () => {
      render(items, true);
      let navElms = element.find(NAV_SELECTOR);
      expect(navElms.length).to.eq(2);
    });

    it('should two navs in non full mode', () => {
      render(items, false);
      let navElms = element.find(NAV_SELECTOR);
      expect(navElms.length).to.eq(2);
    });

    describe('without dropdown', () => {
      it('should render image and item name in full mode', () => {
        render(items, true);
        preloadVariables(0);

        expect(menuItemIconElm.attr('src')).to.eq(items[0].icon);
        expect(menuItemIconElm.hasClass('sm')).be.true;
        expect(menuItemName).to.eq(items[0].name);
      });

      it('should only render image in non full mode', () => {
        render(items, false);
        preloadVariables(0);

        expect(menuItemIconElm.hasClass('sm')).be.false;
        expect(menuItemName).be.empty;
      });
    });

    describe('with dropdown', () => {
      it('should render menu item with dropdown icon in full mode', () => {
        render(items, true);
        preloadVariables(1, true);
        let dropdownIconElm = menuItemElm.find('.fa');

        expect(menuItemIconElm.attr('src')).to.eq(item.icon);
        expect(menuItemName).to.eq(item.name);
        expect(dropdownIconElm).to.be.defined;
      });

      it('should render dropdown items in full mode', () => {
        render(items, true);
        preloadVariables(1, true);
        let dropdownItemElms = navElm.find('.dropdown-item li a');
        let dropdownItemElm = dropdownItemElms.first();
        let dropdownItems = item.dropdown;
        let dropdownItem = dropdownItems[0];

        expect(dropdownItemElms.length).to.eq(dropdownItems.length);
        expect(dropdownItemElm.attr('ui-sref')).to.eq(dropdownItem.state);
        expect(dropdownItemElm.text()).to.eq(dropdownItem.name);
      });

      it('should not render dropdown items in non full mode', () => {
        render(items, false);
        preloadVariables(1, true);
        let dropdownItemElms = navElm.find('.dropdown-item li a');

        expect(dropdownItemElms.length).to.eq(0);
      });
    });
  });
});
