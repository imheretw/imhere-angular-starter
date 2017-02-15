export default class AdminSettingController {
  /*@ngInject*/
  constructor($state) {
    this.$state = $state;
    const tabs = [
      {
        name: 'Consultants',
        state: 'admin.setting.consultants',
      },
      {
        name: 'Widget',
        state: 'admin.setting.widget',
      },
    ];
    this.settingTabs = tabs;
  }

}
