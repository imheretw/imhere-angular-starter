import angular from 'angular';
import 'angular-mocks';
import sidebarNavMenuModule, { NavMenuItem, NavMenuDropdownItem } from './sidebarNavMenu';

describe('Component: sidebarNavMenu', function() {
  let scope;
  let element;
  const items = [
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

  beforeEach(() => {
    angular.mock.module(sidebarNavMenuModule.name);
  });

  describe('UI', function() {
    const NAV_SELECTOR = '.nav';
    const ICON_SELECTOR = '.admin-sidebar__nav--icon';

    let item;
    let navElm;
    let menuItemContainerElm;
    let menuItemElm;
    let menuItemIconElm;
    let menuItemName;

    function preloadVariables(index) {
      item = items[index];
      navElm = element.find(NAV_SELECTOR);
      menuItemContainerElm = navElm.find(`> li:eq(${index})`);
      menuItemElm = menuItemContainerElm.find(`a:eq(0)`);
      menuItemIconElm = menuItemElm.find(ICON_SELECTOR);
      menuItemName = menuItemElm.text().trim();
    }

    it('should have two nav items in full mode', () => {
      render(items, true);
      preloadVariables(0);
      expect(navElm.length).to.eq(1);
    });

    it('should have two nav items in non full mode', () => {
      render(items, false);
      preloadVariables(0);
      expect(navElm.length).to.eq(1);
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
        preloadVariables(1);
        let dropdownIconElm = menuItemElm.find('.fa');

        expect(menuItemIconElm.attr('src')).to.eq(item.icon);
        expect(menuItemName).to.eq(item.name);
        expect(dropdownIconElm).to.be.defined;
      });

      it('should render dropdown items in full mode', () => {
        render(items, true);
        preloadVariables(1);
        let dropdownItemElms = navElm.find('.dropdown-item > li a');
        let dropdownItemElm = dropdownItemElms.first();
        let dropdownItems = item.dropdown;
        let dropdownItem = dropdownItems[0];

        expect(dropdownItemElms.length).to.eq(dropdownItems.length);
        expect(dropdownItemElm.attr('ui-sref')).to.eq(dropdownItem.state);
        expect(dropdownItemElm.text()).to.eq(dropdownItem.name);
      });

      it('should not render dropdown items in non full mode', () => {
        render(items, false);
        preloadVariables(1);
        let dropdownItemElms = navElm.find('.dropdown-item li a');

        expect(dropdownItemElms.length).to.eq(0);
      });
    });
  });

  describe('Controller', () => {
    it('should generate menuItems in $onInit', () => {
      render(items, true);
      let controller = element.controller('sidebarNavMenu');

      expect(controller.menuItems.length).to.eq(2);
    });
  });

  describe('NavMenuItem', () => {
    describe('when calling constructor', () => {
      it('should contain name, state, icon, dropdown properties', () => {
        const navMenuItem = new NavMenuItem(items[1]);

        expect(navMenuItem).to.have.property('name');
        expect(navMenuItem).to.have.property('state');
        expect(navMenuItem).to.have.property('icon');
        expect(navMenuItem).to.have.property('dropdown');
      });

      it('should contain dropdownItems properties if dropdown exists', () => {
        const navMenuItem = new NavMenuItem(items[1]);
        const dropdownItems = navMenuItem.dropdownItems;
        const dropdownItem = dropdownItems[0];

        expect(dropdownItems.length).to.eq(2);
        expect(dropdownItem).to.be.instanceof(NavMenuDropdownItem);
      });
    });

    describe('when calling hasDropdown', () => {
      it('should return false', () => {
        const navMenuItem = new NavMenuItem(items[0]);

        expect(navMenuItem.hasDropdown()).to.eq.false;
      });

      it('should return true', () => {
        const navMenuItem = new NavMenuItem(items[1]);

        expect(navMenuItem.hasDropdown()).to.eq.true;
      });
    });
  });

  describe('NavMenuDropdownItem', () => {
    describe('when calling constructor', () => {
      it('should contain name, state properties', () => {
        const dropdownItem = new NavMenuDropdownItem(items[1].dropdown[0]);

        expect(dropdownItem).to.have.property('name');
        expect(dropdownItem).to.have.property('state');
      });
    });
  });
});
